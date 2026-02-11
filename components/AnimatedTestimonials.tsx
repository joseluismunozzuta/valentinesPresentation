import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            name: "Me encantas tanto, Mar",
            designation: "Me enamoré de ti sin dudarlo",
            src: "/m1.jpg",
        },
        {
            name: "Eres mi persona favorita",
            designation: "Contigo todo se siente bonito y real",
            src: "/m2.jpg",
        },
        {
            name: "Me derrito por verte feliz",
            designation: "Te pienso y todo es mejor",
            src: "/m3.jpg",
        },
        {
            name: "Qué suerte la mía de coincidir contigo",
            designation: "Me haces sentir seguro",
            src: "/m4.jpg",
        },
        {
            name: "Me fascina tu forma de ser",
            designation: "Tu esencia me inspira y me enamora",
            src: "/m5.jpg",
        },
        {
            name: "La chica de mis sueños eres tú",
            designation: "Te esperé toda la vida",
            src: "/m6.jpg",
        },
        {
            name: "No sabes cuánto te admiro",
            designation: "Mi corazoncito ya es tuyo",
            src: "/m7.jpg",
        },
        {
            name: "Haces que mi corazón vibre mucho",
            designation: "Quiero cuidarte y elegirte siempre",
            src: "/m8.jpg",
        },
        {
            name: "Eres magia, Mar",
            designation: "Me enamoras día a día",
            src: "/m9.jpg",
        },
        {
            name: "Te quiero siempre, mi corazón",
            designation: "Incluso cuando tengamos momentos difíciles",
            src: "/m10.jpg",
        },
        {
            name: "Qué hermoso es quererte",
            designation: "Gracias por existir y por elegirme",
            src: "/m11.jpg",
        },
    ];

    return <AnimatedTestimonials testimonials={testimonials} />;
}
