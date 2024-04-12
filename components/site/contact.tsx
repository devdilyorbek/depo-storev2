import React from "react";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <section className="text-muted-foreground body-font relative">
      <div className="absolute inset-0 bg-backborder-foreground/50">
        <iframe
          width="100%"
          height="100%"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?q=39.634892,66.913756&ll=39.634892,66.913756&z=16&output=embed"
          style={{ filter: "invert(90%)" }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-background rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-foreground text-lg mb-1 font-medium title-font">
            Contact US
          </h2>
          <p className="leading-relaxed mb-5 text-muted-foreground">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-muted-foreground"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-background rounded border border-foreground/50 focus:border-primary focus:ring-2 focus:ring-ring  text-base outline-none text-foreground py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-background rounded border border-foreground/50 focus:border-primary focus:ring-2 focus:ring-ring  h-32 text-base outline-none text-foreground py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <Button className="text-background bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary/50 rounded text-lg font-bold">
            Send message
          </Button>
          <p className="text-xs text-foreground mt-3">
            We will contact you soon
          </p>
        </div>
      </div>
    </section>
  );
}
