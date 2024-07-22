"use client";
import ImageMarquee from "@/components/MarqueeComponent";
import ContactHome from "@/components/ContactHome";
import AboutProduct from "@/components/aboutProduct";
import Banner from "@/components/banner";
import ContentCol from "@/components/content-col";
import Founder from "@/components/founder";
import ImageText from "@/components/imageText";
import React from "react";
import Feedback from "@/components/feedback";
import { AboutProduct as AboutProductType } from "@/interface/AboutProduct";
import AboutProductPage from "@/components/aboutProductPage";
import AboutPage from "@/components/AboutPage";

export default function Home() {
    const images = [
        "./images/founder/02.png",
        "./images/landing-page/banner.png",
        "./images/logo/logo-hanger.png",
        "./images/logo/logo-hanger.png",
        "./images/logo/logo-hanger.png",
    ];
    const aboutProductsFirst: AboutProductType[] = [
        { title: "Product Background Generator", videoId: "F5tS5m86bOI", description: "Generate custom backgrounds for products." },
        { title: "Product Image Inpainting", videoId: "F5tS5m86bOI", description: "Remove and replace any part of image product." },
        { title: "Upscale Image", videoId: "F5tS5m86bOI", description: "Increase the resolution of an image." },
        { title: "Product Image Recolor", videoId: "F5tS5m86bOI", description: "Find the perfect shade for your product." },
        { title: "Magic Eraser", videoId: "F5tS5m86bOI", description: "Remove distractions and unwanted objects." },

    ];
    const aboutProductsSecond: AboutProductType[] = [
        { title: "Product Descriptions", videoId: "F5tS5m86bOI", description: "Automate product descriptions, enrich product catalog." },
        { title: "Product Content Writing", videoId: "F5tS5m86bOI", description: "Generate informative, compelling product content to hook customers and boost sales." },
    ];
    return (
        <React.Fragment>
            <Banner
                title=" Advancing creativity with"
                description="AI Model & Product Studio"
                buttonText="Try for free"
                linkButton="#"
                tag="Trusted by users worldwide from"
                thumbnail="/images/landing-page/banner.png"

            />
            <AboutPage
                title="50+ Hours Saved, Millions Reached"
                sologant="Automate Virtual Try-on, Images Model & Product, Product Description and Product Content Generation"
            />
            <AboutProductPage
                header="WHAT WE DO"
                title="Virtual Dressing Room "
                buttonText="Try  for  free"
                linkButton="#"
                description="Try on clothes online and see how different outfits look on models."
                thumbnail="/images/dropdown-header/VirtualTry-on.jpg"

            />
            <AboutProductPage
                header=""
                title="Virtual Model "
                buttonText="Try  for  free"
                linkButton="#"
                description="Generate realistic human models with all scenes and the mannequin for an synthetic human. "
                thumbnail="/images/dropdown-header/virtualmodel.jpg"

            />
            <AboutProduct
                header="AI Product Photoshoots"
                description="Professionally edit product photos without experience"
                template={1}
                linkButton="#"
                buttonText="Try for free"
                background={true}
                content={aboutProductsFirst}

            />
            <AboutProduct
                header="AI Content Writing"
                description="Automate product descriptions and write articles about product content in a simple and professional way."
                template={2}
                linkButton="#"
                buttonText="Try for free"
                background={false}
                content={aboutProductsSecond}
            />
            <ImageText />
            {/* <Feedback
                    Feedbacks={[
                        {
                            author: "Nguyen Tran",
                            job: "Developer",
                            title: "AI use so good",
                            description:
                                "It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, ",
                            star: 5,
                        },
                        {
                            author: "Nguyen Tran",
                            job: "Developer",
                            title: "AI use so good",
                            description:
                                "It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, ",
                            star: 5,
                        },
                        {
                            author: "Nguyen Tran",
                            job: "Developer",
                            title: "AI use so good",
                            description:
                                "It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, It so good for me, ",
                            star: 5,
                        },
                    ]}
                    direction="right"
                /> */}
            {/* <ImageMarquee
                content={[
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Virtual Try-on",
                        description:
                            "Try on clothes online",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/youtube.png",
                        title: "Upscale Image",
                        description:
                            "Boost image resolution",
                    },
                    {
                        thumbnail:
                            "./images/landing-page/marquee/instagram.png",
                        title: "AI Background Generator",
                        description:
                            "Generate custom backgrounds.",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Image Recolor",
                        description:
                            "Adjust image colors without Photoshop.",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Social Media Marketing",
                        description:
                            "Create descriptive Facebook posts, ad copy,...",
                    },
                ]}
                direction="left"
            /> */}
            {/* <ImageMarquee
                content={[
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Image Inpainting",
                        description:
                            "Retouch image, remove, generate patterns on product.",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/youtube.png",
                        title: "Magic Eraser",
                        description:
                            "Remove any distractions and unwanted objects.",
                    },
                    {
                        thumbnail:
                            "./images/landing-page/marquee/instagram.png",
                        title: "AI Product Descriptions",
                        description:
                            "Extract product details from image, enrich product catalog.",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Product Tagging",
                        description:
                            "Add smart tags for inventories",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Website/SEO",
                        description:
                            "Craft impactful copywriting & SEO keywords",
                    },
                    {
                        thumbnail: "./images/landing-page/marquee/google.png",
                        title: "Communications",
                        description:
                            "Create emails, memos, and more.",
                    },
                ]}
                direction="right"
            /> */}
            {/* <ContactHome /> */}
        </React.Fragment>
    );
}
