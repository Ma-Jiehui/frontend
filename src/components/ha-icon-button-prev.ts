import { HaIconButton } from "./ha-icon-button";

export class HaIconButtonPrev extends HaIconButton {
  public connectedCallback() {
    super.connectedCallback();

    // wait to check for direction since otherwise direction is wrong even though top level is RTL
    setTimeout(() => {
      this.icon =
        window.getComputedStyle(this).direction === "ltr"
          ? "hass:chevron-left"
          : "hass:chevron-right";
    }, 100);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-icon-button-prev": HaIconButtonPrev;
  }
}

customElements.define("ha-icon-button-prev", HaIconButtonPrev);
