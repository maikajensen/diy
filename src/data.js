import clampSoft from '/src/components/clamp_soft_1765493709354.png';
import levelSoft from '/src/components/level_soft_1765493723854.png';
import jigsawSoft from '/src/components/jigsaw_soft_1765493737860.png';
import contourSoft from '/src/components/contour_soft_1765493753362.png';
import drillGuideSoft from '/src/components/drillguide_soft_1765493767553.png';
import drillSoft from '/src/components/drill_soft_1765493794349.png';
// Note: drill_soft path will be updated after generation, using placeholder for now or if I can predict it. 
// Actually, I can't predict the timestamp. I will use a placeholder and update it in a second step or just use the generated one if I can get the path from the previous turn? 
// Wait, I am in the same turn. I cannot know the path of the drill image yet. 
// I will write the file with the 5 known images and a placeholder for the drill, then update it in the next turn.
// OR I can just wait to write this file until I have the drill image path.
// But I want to do things in parallel.
// I will write it with a placeholder and update it next turn.

export const products = [
    {
        id: 1,
        name: "Vaterpas",
        description: "For helt lige hylder.",
        price: 149,
        image: levelSoft,
        category: "Måling"
    },
    {
        id: 2,
        name: "Konturmåler",
        description: "Kopier former øjeblikkeligt for perfekte snit.",
        price: 199,
        image: contourSoft,
        category: "Måling"
    },
    {
        id: 3,
        name: "Skruetvinger",
        description: "Et ekstra sæt hænder til limning.",
        price: 129,
        image: clampSoft,
        category: "Klemmer"
    },
    {
        id: 4,
        name: "Boreguide",
        description: "Bor grebshuller det helt rigtige sted.",
        price: 249,
        image: drillGuideSoft,
        category: "Boring"
    },
    {
        id: 5,
        name: "Boremaskine",
        description: "Kraftfuld boremaskine til alle opgaver.",
        price: 499,
        image: drillSoft,
        category: "Boring"
    },
    {
        id: 6,
        name: "Stiksav",
        description: "Til præcise udskæringer.",
        price: 399,
        image: jigsawSoft,
        category: "Savning"
    }
];

export const projects = [
    {
        id: 1,
        title: "Byggevejledning - Bænk - Metod",
        description: "Byg en smuk bænk med opbevaring baseret på IKEA Metod.",
        image: "https://www.yaay.dk/cdn/shop/files/IMG_6759_jpg.jpg?v=1740749044",
        price: 295,
        tools: [1, 3, 5, 6] // Vaterpas, Skruetvinger, Boremaskine, Stiksav
    },
    {
        id: 2,
        title: "Byggevejledning - Hesteskoskab - Metod",
        description: "Elegant skoopbevaring formet som en hestesko.",
        image: "https://www.yaay.dk/cdn/shop/files/EB62E860-9BB2-416D-A8DA-E6B4C4D6976C2.jpg?v=1710973307",
        price: 395,
        tools: [1, 5, 6]
    },
    {
        id: 3,
        title: "Byggevejledning - Garderobeskab - Metod",
        description: "Skab dit drømmegarderobeskab med Metod moduler.",
        image: "https://www.yaay.dk/cdn/shop/files/YAAY11.jpg?v=1710926323",
        price: 350,
        tools: [1, 3, 5]
    },
    {
        id: 4,
        title: "Byggevejledning - Skråskab - Metod",
        description: "Udnyt pladsen under skråvæggen optimalt.",
        image: "https://www.yaay.dk/cdn/shop/files/IMG_4038_Original.jpg?v=1740526209",
        price: 395,
        tools: [1, 2, 5, 6] // Konturmåler is good for angles
    },
    {
        id: 5,
        title: "Byggevejledning - Garderobeskab - Pax",
        description: "Indbyg dine PAX skabe for et eksklusivt look.",
        image: "https://www.yaay.dk/cdn/shop/files/IMG_1141_Original2.jpg?v=1713989362",
        price: 350,
        tools: [1, 3, 5]
    },
    {
        id: 6,
        title: "Byggevejledning - Reol - Metod",
        description: "Den klassiske indbyggede reol. Kræver ingen specialværktøj.",
        image: "https://www.yaay.dk/cdn/shop/files/IMG_3945_2.jpg?v=1732921498",
        price: 495,
        tools: [1, 3, 5, 6]
    },
    {
        id: 7,
        title: "Byggevejledning - Reol rundt om dør - Metod",
        description: "Ram din dør ind med en smuk reol.",
        image: "https://www.yaay.dk/cdn/shop/files/IMG_5399_redigeret3.jpg?v=1732922703",
        price: 495,
        tools: [1, 2, 3, 5]
    },
    {
        id: 8,
        title: "Byggevejledning - Hul til TV",
        description: "Integrer dit TV i reolen.",
        image: "https://www.yaay.dk/cdn/shop/files/Billede_16.06.2025_09.42.48.jpg?v=1750937589",
        price: 65,
        tools: [1, 5]
    },
    {
        id: 9,
        title: "Byggevejledning - Vaskeskab - Metod",
        description: "Skjul vaskesøjlen med stil.",
        image: "https://www.yaay.dk/cdn/shop/files/IMG_3767_Original.jpg?v=1758720586",
        price: 395,
        tools: [1, 3, 5]
    }
];
