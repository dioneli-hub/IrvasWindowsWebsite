import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import timer from "./modules/timer";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    let deadline = '2021-07-16';

    modals();
    tabs(".glazing_slider",".glazing_block", ".glazing_content", "active");
    tabs(".decoration_slider",".no_click", ".decoration_content > div > div", "after_click");
    forms();
    timer(".container1", deadline);
});

console.log(1);