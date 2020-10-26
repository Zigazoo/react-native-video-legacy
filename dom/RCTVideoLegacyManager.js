// @flow

import { RCTViewManager } from "react-native-dom";

import RCTVideoLegacy from "./RCTVideoLegacy";
import resizeModes from "./resizeModes";

import type { VideoSource } from "./types";

class RCTVideoLegacyManager extends RCTViewManager {
  static moduleName = "RCTVideoLegacyManager";

  view() {
    return new RCTVideoLegacy(this.bridge);
  }

  describeProps() {
    return super
      .describeProps()
      .addBooleanProp("controls", this.setControls)
      .addStringProp("id", this.setId)
      .addBooleanProp("muted", this.setMuted)
      .addBooleanProp("paused", this.setPaused)
      .addNumberProp("progressUpdateInterval", this.setProgressUpdateInterval)
      .addBooleanProp("rate", this.setRate)
      .addBooleanProp("repeat", this.setRepeat)
      .addNumberProp("resizeMode", this.setResizeMode)
      .addNumberProp("seek", this.setSeek)
      .addObjectProp("src", this.setSource)
      .addNumberProp("volume", this.setVolume)
      .addDirectEvent("onVideoEnd")
      .addDirectEvent("onVideoError")
      .addDirectEvent("onVideoLoad")
      .addDirectEvent("onVideoLoadStart")
      .addDirectEvent("onVideoProgress");
  }

  dismissFullscreenPlayer() {
    // not currently working
  }

  presentFullscreenPlayer() {
    // not currently working
  }

  setControls(view: RCTVideoLegacy, value: boolean) {
    view.controls = value;
  }

  setId(view: RCTVideoLegacy, value: string) {
    view.id = value;
  }

  setMuted(view: RCTVideoLegacy, value: boolean) {
    view.muted = value;
  }

  setPaused(view: RCTVideoLegacy, value: boolean) {
    view.paused = value;
  }

  setRate(view: RCTVideoLegacy, value: number) {
    view.rate = value;
  }

  setRepeat(view: RCTVideoLegacy, value: boolean) {
    view.repeat = value;
  }

  setResizeMode(view: RCTVideoLegacy, value: number) {
    view.resizeMode = value;
  }

  setSeek(view: RCTVideoLegacy, value: number) {
    view.seek = value;
  }

  setSource(view: RCTVideoLegacy, value: VideoSource) {
    view.source = value;
  }

  constantsToExport() {
    return { ...resizeModes };
  }
}

export default RCTVideoLegacyManager;
