import React from "react";

const Introduction = () => (
    <section id="introduction" style={{ padding: "2rem" }}>
        <h2>About HEXRD</h2>
        <p>
            The HEXRD project is developing a cross-platform, open-source
            library for the general analysis of X-ray diffraction data. This
            includes powder diffraction, Laue diffraction, and High Energy
            Diffraction Microscopy (a.k.a. 3DXRD, multi-grain rotation method)
            modalities. At its core, HEXRD provides an abstraction of a generic
            diffraction instrument with support for multiple detectors. This
            includes optimized transforms from the direct and reciprocal crystal
            lattices to the local detector coordinates, harnesses for
            interpolating image data into scattering angle coordinates, and
            sophisticated calibration routines.
        </p>
    </section>
);

export default Introduction;
