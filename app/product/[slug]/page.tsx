import ContactHome from "@/components/ContactHome";
import Banner from "@/components/banner";
import BannerProduct from "@/components/bannerProduct";
import AboutSubProduct from "@/components/product/aboutProduct";
import ImageTextSide from "@/components/product/imageTextSide";
import Slogan from "@/components/product/slogan";
import React from "react";

interface Content {
    Banner: {
        title: string;
        description: string;
        linkButton: string;
        thumbnail: string;
    };
}

function Product({ params }: { params: { slug: string } }) {
    let content: Content = {
        Banner: { title: "", description: "", linkButton: "", thumbnail: "" },
    }; // Initialize content
    if (params.slug === "visual-dressing-room") {
        content = {
            Banner: {
                title: "Visual Dressing Room",
                description:
                    "Try on clothes online and see how different outfits look on you. No need for models or studios, simply upload product images and let our AI generate your new collection.",
                linkButton: "#",
                thumbnail: "/images/product-tagging/product-tagging-banner.jpg",
            },
        };
    }
    else if (params.slug === "ai-photoshoots-studio-design"){
        content = {
            Banner: {
                title: "AI Photoshoots Studio Design",
                description:
                    "Take control of your product photography without ever stepping foot in a studio. Upscale images, boost resolution, generate custom backgrounds, and even more.",
                linkButton: "#",
                thumbnail: "/images/product-tagging/product-tagging-banner.jpg",
            },
        };
    }
    else if (params.slug === "ai-content-writing"){
        content = {
            Banner: {
                title: "AI Content Writing",
                description:
                    "Create marketing content effortlessly from product images. Ready for engaging product descriptions, captivating copywriting, and powerful ad script.",
                linkButton: "#",
                thumbnail: "/images/product-tagging/product-tagging-banner.jpg",
            },
        };
    }
    return (
        <>
            <BannerProduct
                tag={params.slug}
                title={content.Banner.title}
                description={content.Banner.description}
                buttonText="Try now"
                linkButton={content.Banner.linkButton}
                thumbnail={content.Banner.thumbnail}
            />
            <ImageTextSide
                side={0}
                title="Spend more time on ideas, less on tasks"
                description="Tired of looking at a blank page? Jump start projects by simply typing your idea. Stress test headlines, brainstorm campaigns, personalize pitches, and more."
                thumbnail="/images/product-tagging/prompt_visual.webp"
            />
            <ImageTextSide
                side={1}
                title="Spend more time on ideas, less on tasks"
                description="Tired of looking at a blank page? Jump start projects by simply typing your idea. Stress test headlines, brainstorm campaigns, personalize pitches, and more."
                thumbnail="/images/product-tagging/prompt_visual.webp"
            />
            <ImageTextSide
                side={0}
                title="Spend more time on ideas, less on tasks"
                description="Tired of looking at a blank page? Jump start projects by simply typing your idea. Stress test headlines, brainstorm campaigns, personalize pitches, and more."
                thumbnail="/images/product-tagging/prompt_visual.webp"
            />
            <Slogan />
            <ContactHome />
        </>
    );
}

export default Product;
