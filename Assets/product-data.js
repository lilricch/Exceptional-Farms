const products = [
    // FEEDERS
    {
        id: 1,
        name: "28 Holes Chick Feeder",
        price: 18,
        image: "Assets/28 holes chick feeder.jpg",
        category: "feeders",
        description: "A durable plastic feeder with 28 holes designed specifically for chicks. Prevents feed wastage and keeps feed clean."
    },
    {
        id: 2,
        name: "1.5kg Feeder",
        price: 15,
        image: "Assets/1.5kg feeder.jpg",
        category: "feeders",
        description: "Compact 1.5kg capacity feeder, ideal for small flocks or brooding chicks. Easy to fill and clean."
    },
    {
        id: 3,
        name: "12kg Feeder",
        price: 65,
        image: "Assets/12kg feeder.jpg",
        category: "feeders",
        description: "Large 12kg capacity feeder suitable for mature birds. Reduces the frequency of refilling and is made of heavy-duty plastic."
    },
    {
        id: 4,
        name: "3kg Feeder",
        price: 25,
        image: "Assets/3kg feeder.jpg",
        category: "feeders",
        description: "3kg hanging feeder perfect for growing birds. Features an anti-waste ring to save feed costs."
    },
    {
        id: 5,
        name: "6kg Feeder",
        price: 40,
        image: "Assets/6kg feeder.jpg",
        category: "feeders",
        description: "Medium-sized 6kg feeder. Durable construction with adjustable feed flow to suit different feed types."
    },
    {
        id: 6,
        name: "10kg Feeder",
        price: 55,
        image: "Assets/10kg feeder.jpg",
        category: "feeders",
        description: "10kg capacity feeder for larger poultry operations. Can be hung or placed on the floor."
    },

    // DRINKERS
    {
        id: 7,
        name: "10L Drinker",
        price: 55,
        image: "Assets/10l drinker.jpg",
        category: "drinkers",
        description: "10-liter poultry drinker with a sturdy handle. Provides a steady supply of clean water for your flock."
    },
    {
        id: 8,
        name: "6L Drinker",
        price: 40,
        image: "Assets/6l drinker.jpg",
        category: "drinkers",
        description: "6-liter drinker suitable for broilers and layers. Easy twist-lock assembly for quick filling."
    },
    {
        id: 9,
        name: "3L Drinker",
        price: 25,
        image: "Assets/3l drinker.jpg",
        category: "drinkers",
        description: "3-liter drinker, perfect for chicks and small birds. Translucent tank allows easy water level monitoring."
    },
    {
        id: 10,
        name: "1.5L Drinker",
        price: 15,
        image: "Assets/1.5l drinker.jpg",
        category: "drinkers",
        description: "Small 1.5L drinker designed for day-old chicks. Prevents drowning and keeps litter dry."
    },
    {
        id: 11,
        name: "Nipple Drinker with Cup",
        price: 5,
        image: "Assets/nipple drinker with cup.jpg",
        category: "drinkers",
        description: "Automatic nipple drinker with drip cup. Ensures 100% hygiene and reduces water wastage significantly."
    },
    {
        id: 12,
        name: "16L Drinker",
        price: 70,
        image: "Assets/16l drinker.jpg",
        category: "drinkers",
        description: "Heavy-duty 16L drinker for large flocks. Stable base prevents tipping and spilling."
    },

    // OTHERS
    {
        id: 13,
        name: "Hand-Held Electric Debeaker",
        price: 25,
        image: "Assets/hand-held electric debeaker.jpg",
        category: "others",
        description: "Portable hand-held electric debeaker. Efficient for trimming beaks to prevent cannibalism in flocks."
    },
    {
        id: 14,
        name: "Automatic Drinkers High Quality",
        price: 150,
        image: "Assets/automatic drinker high quality.jpg",
        category: "drinkers",
        description: "High-quality automatic bell drinker. Connects to a water line for continuous water supply without manual refilling."
    },
    {
        id: 15,
        name: "Automatic Debeaker",
        price: 1150,
        image: "Assets/automatic debeaker.jpg",
        category: "others",
        description: "Professional automatic debeaking machine. Fast, precise, and cauterizes to prevent bleeding. Ideal for large farms."
    },
    {
        id: 16,
        name: "Semi Auto Debeaker",
        price: 800,
        image: "Assets/semi auto debeaker.jpg",
        category: "others",
        description: "Semi-automatic debeaker offering a balance between manual control and automation. Reliable and durable."
    },
    {
        id: 17,
        name: "250W/275W Brooder Lamps",
        price: 50,
        image: "Assets/250275w brooder lamps.jpg",
        category: "others",
        description: "Infrared heat lamp (250W/275W) for brooding chicks. Provides essential warmth for survival in the first few weeks."
    },
    {
        id: 18,
        name: "Ceramic Lamp Holder",
        price: 20,
        image: "Assets/ceramic lamp holder.jpg",
        category: "others",
        description: "Heat-resistant ceramic lamp holder. Designed to safely handle the high temperatures of brooder bulbs."
    },
    {
        id: 19,
        name: "Large Holes Line Feeder",
        price: 40,
        image: "Assets/Large holes line feeder.jpg",
        category: "feeders",
        description: "Durable line feeder with large holes, suitable for adult poultry. Minimizes feed wastage."
    },
    {
        id: 20,
        name: "Gas Brooder - Small",
        price: 849,
        image: "Assets/Gas brooder - small.jpg",
        category: "others",
        description: "Efficient small gas brooder for providing consistent heat to chicks during brooding."
    },
    {
        id: 21,
        name: "Gas Brooder - Long",
        price: 1549,
        image: "Assets/Gas brooder - long.jpg",
        category: "others",
        description: "Long gas brooder designed for larger brooding areas, ensuring even heat distribution."
    },
    {
        id: 22,
        name: "Gas Brooder - Round",
        price: 1999,
        image: "Assets/Gas brooder - round.jpg",
        category: "others",
        description: "High-capacity round gas brooder. Excellent for maintaining optimal temperatures in large poultry houses."
    },
    {
        id: 23,
        name: "Thermometer & Hygrometer",
        price: 50,
        image: "Assets/Thermometer & Hygrometer.jpg",
        category: "others",
        description: "Digital thermometer and hygrometer to monitor temperature and humidity levels in your poultry farm."
    },
    {
        id: 24,
        name: "Automatic Debeaker with counter",
        price: 1449,
        image: "Assets/Automatic Debeaker with counter.jpg",
        category: "others",
        description: "Advanced automatic debeaking machine equipped with a counter to track the number of birds processed."
    },
    {
        id: 25,
        name: "Fowl Pox Vaccinator",
        price: 120,
        image: "Assets/fowl pox vaccinator.jpg",
        category: "others",
        description: "A specialized tool for administering fowl pox vaccine to poultry, ensuring accurate dosage and safety."
    },
    {
        id: 26,
        name: "3rd Newcastle Vaccinator",
        price: 300,
        image: "Assets/3rd newcastle vaccinator.jpg",
        category: "others",
        description: "An efficient vaccinator designed for the application of Newcastle disease vaccines to your flock."
    }
];