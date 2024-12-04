import React from "react";
import "./GuiSection.scss";

const GuiSection = () => (
    <section id="gui" style={{ padding: "2rem" }}>
        <h2>Using HEXRD</h2>
        <p>
            HEXRD is primarily used through the{" "}
            <a href="https://hexrdgui.readthedocs.io/en/latest/">
                HEXRD User Interface
            </a>
            . The HEXRD GUI provides many interactive workflows for visualizing
            and processing X-ray diffraction image data images using the generic
            multi-detector instrument model in HEXRD.
        </p>
        <div id="images">
            <img src="images/rotation_series.png" alt="Diffraction" />
            <img
                src="images/tardis_powder_and_laue_overlays.png"
                alt="Tardis powder and laue overlays"
            />
        </div>
    </section>
);

export default GuiSection;
