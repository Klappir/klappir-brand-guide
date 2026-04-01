import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { guideSections } from "../content/brandGuide";
import { BrandGuidePage } from "./BrandGuidePage";

type ObserverEntry = Pick<IntersectionObserverEntry, "isIntersecting" | "target">;

let observerCallback: ((entries: ObserverEntry[]) => void) | undefined;
let observeMock: ReturnType<typeof vi.fn>;
let disconnectMock: ReturnType<typeof vi.fn>;
let observerOptions: IntersectionObserverInit | undefined;
let scrollToMock: ReturnType<typeof vi.fn>;
let clipboardWriteTextMock: ReturnType<typeof vi.fn>;

class MockIntersectionObserver {
  constructor(
    callback: (entries: ObserverEntry[]) => void,
    options?: IntersectionObserverInit,
  ) {
    observerCallback = callback;
    observerOptions = options;
  }

  observe = observeMock;
  disconnect = disconnectMock;
  unobserve = vi.fn();
  root = null;
  rootMargin = "";
  thresholds = [];
  takeRecords = vi.fn(() => []);
}

describe("BrandGuidePage", () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    observeMock = vi.fn();
    disconnectMock = vi.fn();
    scrollToMock = vi.fn();
    clipboardWriteTextMock = vi.fn().mockResolvedValue(undefined);
    observerCallback = undefined;
    observerOptions = undefined;

    Object.defineProperty(window, "IntersectionObserver", {
      configurable: true,
      writable: true,
      value: MockIntersectionObserver,
    });

    Object.defineProperty(window, "scrollTo", {
      configurable: true,
      writable: true,
      value: scrollToMock,
    });

    Object.defineProperty(window, "scrollY", {
      configurable: true,
      writable: true,
      value: 120,
    });

    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: clipboardWriteTextMock,
      },
    });
  });

  it("renders the hero and every section navigation button", () => {
    render(<BrandGuidePage />);

    expect(screen.getByRole("heading", { name: /The Sustainability Ecosystem/i })).toBeInTheDocument();

    const navButtons = within(screen.getByRole("navigation")).getAllByRole("button");
    expect(navButtons).toHaveLength(guideSections.length);
    expect(navButtons.map((button) => button.textContent)).toEqual(
      guideSections.map((section) => section.label),
    );
  });

  it("preserves the observer settings and updates the active nav item", async () => {
    render(<BrandGuidePage />);

    expect(observerOptions?.rootMargin).toBe("-30% 0px -60% 0px");
    expect(observeMock).toHaveBeenCalledTimes(guideSections.length);

    const toneSection = document.getElementById("tone");
    expect(toneSection).not.toBeNull();

    observerCallback?.([{ isIntersecting: true, target: toneSection! }]);

    await waitFor(() => {
      expect(within(screen.getByRole("navigation")).getByRole("button", { name: "Tone" })).toHaveAttribute(
        "aria-current",
        "page",
      );
    });
  });

  it("scrolls to the selected section using the fixed offset", () => {
    render(<BrandGuidePage />);

    const coloursSection = document.getElementById("colours");
    expect(coloursSection).not.toBeNull();

    Object.defineProperty(coloursSection!, "getBoundingClientRect", {
      configurable: true,
      value: () => ({
        top: 300,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      }),
    });

    fireEvent.click(within(screen.getByRole("navigation")).getByRole("button", { name: "Colours" }));

    expect(scrollToMock).toHaveBeenCalledWith({ top: 350, behavior: "smooth" });
  });

  it("scrolls back to the top when the logo is clicked", () => {
    render(<BrandGuidePage />);

    fireEvent.click(screen.getAllByAltText("Klappir")[0]);

    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("copies a swatch hex code when a color preview is clicked", () => {
    render(<BrandGuidePage />);

    fireEvent.click(screen.getByRole("button", { name: "Copy Green hex code #3C9E76" }));

    expect(clipboardWriteTextMock).toHaveBeenCalledWith("#3C9E76");
    expect(screen.getByRole("status")).toHaveTextContent("Hex code copied");
  });
});
