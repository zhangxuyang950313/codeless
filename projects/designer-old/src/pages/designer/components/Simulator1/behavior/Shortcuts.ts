import { Behavior, SimulatorEvents } from "../interface";
import { Simulator } from "../Simulator";

export default class Shortcuts implements Behavior {
  constructor(private ctx: Simulator) {}
  getEvents(): SimulatorEvents {
    return {
      "document:keydown": this.keydown,
      "document:keyup": this.keyup
    };
  }

  handleShift(isUp?: boolean) {
    this.ctx.setMode(isUp ? "default" : "dragSelect");
  }

  keydown = () => {
    this.handleShift();
  };

  keyup = () => {
    this.handleShift(true);
  };
}
