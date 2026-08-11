// MedPlus Products, Services, and Blog Database

window.medPlusProducts = [
  {
    id: "paracetamol-500",
    name: "Paracetamol 500mg Tablets",
    category: "medicines",
    price: 4.99,
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    description: "Fast relief from fever, headache, and mild to moderate pain.",
    instructions: "Adults: Take 1-2 tablets every 4 to 6 hours as needed. Do not exceed 8 tablets in 24 hours.",
    precautions: "Do not take with other products containing paracetamol to prevent overdose."
  },
  {
    id: "amoxicillin-500",
    name: "Amoxicillin 500mg Capsules",
    category: "medicines",
    price: 18.50,
    prescriptionRequired: true,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=600&q=80",
    description: "Broad-spectrum penicillin antibiotic used to treat bacterial infections.",
    instructions: "Take 1 capsule three times daily as directed by your doctor. Complete the full course.",
    precautions: "Do not take if you are allergic to penicillin or cephalosporin antibiotics."
  },
  {
    id: "blood-pressure-monitor",
    name: "Omron Gold Blood Pressure Monitor",
    category: "devices",
    price: 59.99,
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80",
    description: "Upper arm blood pressure monitor with Bluetooth connectivity and dual-user mode.",
    instructions: "Rest for 5 minutes. Sit comfortably, wrap the cuff around your upper arm, and press Start.",
    precautions: "Consult your doctor for interpreting readings. Do not adjust medication dosages yourself."
  },
  {
    id: "pulse-oximeter",
    name: "Fingertip Pulse Oximeter",
    category: "devices",
    price: 19.99,
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80",
    description: "Quickly measures blood oxygen saturation (SpO2) and pulse rate.",
    instructions: "Clip the device onto your index finger, keep still, and wait 5 seconds for the reading.",
    precautions: "Nail polish or cold extremities may affect reading accuracy."
  },
  {
    id: "baby-lotion-gentle",
    name: "Johnson's CottonTouch Baby Lotion",
    category: "baby-care",
    price: 7.99,
    prescriptionRequired: false,
    image: "../../assets/babycare.jpg",
    description: "Clinically proven mild formula blended with real cotton for sensitive baby skin.",
    instructions: "Smooth gently over baby's body after a warm bath or whenever dry skin occurs.",
    precautions: "For external use only. Keep out of reach of children."
  },
  {
    id: "organic-baby-cereal",
    name: "Gerber Organic Oatmeal Cereal",
    category: "baby-care",
    price: 5.49,
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80",
    description: "USDA certified organic single grain oatmeal cereal for supported sitters.",
    instructions: "Mix 1 tbsp cereal with 4-5 tbsp breastmilk or formula to desired consistency.",
    precautions: "Store in a cool dry place. Use within 30 days of opening."
  },
  {
    id: "vitamin-c-zinc",
    name: "Nature's Bounty Vitamin C + Zinc",
    category: "wellness",
    price: 12.99,
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80",
    description: "Daily immune support supplements formulated with Vitamin C and Zinc.",
    instructions: "Take 1 caplet daily, preferably with a meal or as recommended by a specialist.",
    precautions: "Consult a healthcare professional if pregnant, nursing, or taking other medications."
  },
  {
    id: "omega-3-fish-oil",
    name: "Triple Strength Omega-3 Fish Oil",
    category: "wellness",
    price: 24.99,
    prescriptionRequired: false,
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=600&q=80",
    description: "Supports heart, joint, cognitive, and overall cardiovascular health.",
    instructions: "Take 1 softgel daily with water and a meal to maximize absorption.",
    precautions: "Keep bottle tightly closed. Store away from heat and direct sunlight."
  }
];

window.medPlusServices = [
  {
    id: "prescription-refill",
    name: "Prescription Refill & Delivery",
    shortDescription: "Upload your prescription and get medicines delivered straight to your door step.",
    longDescription: "Our prescription refill service makes managing your medications seamless. Simply upload a picture or scan of your doctor's prescription, and our registered pharmacists will verify, prepare, and deliver it safely directly to your home.",
    features: [
      "24-Hour Express Home Delivery",
      "Direct Insurance Billing & Integration",
      "Automatic Monthly Refill Reminders",
      "Live Chat Support with Licensed Pharmacists"
    ],
    priceTiers: [
      { name: "Standard Delivery", price: "$2.99", period: "per delivery", highlights: "Delivered within 24-48 hours. Free for orders above $35." },
      { name: "Express Delivery", price: "$6.99", period: "per delivery", highlights: "Priority delivery within 4-6 hours. Real-time courier tracking." },
      { name: "Premium Pharmacy Care", price: "$14.99", period: "per month", highlights: "Unlimited free express deliveries, automatic packaging, and monthly consultations." }
    ],
    faqs: [
      { q: "How do I upload my prescription?", a: "Go to our homepage or Home-2 page and use the Prescription Upload Enquiry Form, upload an image/PDF file, and fill in your contact information." },
      { q: "Is insurance accepted for deliveries?", a: "Yes, we accept major insurance plans. During checkout or verification, you can submit your insurance details for direct coverage check." },
      { q: "Are prescription drugs safe during transit?", a: "Absolutely. All medicines are packed in temperature-controlled, tamper-evident packages to preserve quality and security." }
    ]
  },
  {
    id: "wellness-consult",
    name: "Wellness & Pharmacist Consultation",
    shortDescription: "Schedule a one-on-one virtual or in-person session with a clinical pharmacist.",
    longDescription: "Get personalized guidance on drug interactions, side effects, dietary supplements, and chronic disease management (like high blood pressure or diabetes) from our clinical experts.",
    features: [
      "Private 30-minute Consultation Room",
      "Full Prescription Interaction Review",
      "Tailored Supplement and Nutrition Plan",
      "Digital Health Summary Report"
    ],
    priceTiers: [
      { name: "Quick Consult", price: "Free", period: "10 mins", highlights: "Basic Q&A regarding side effects or simple OTC queries." },
      { name: "Comprehensive Consult", price: "$29.99", period: "30 mins", highlights: "In-depth clinical overview of your medication list, interactions, and chronic guidance." },
      { name: "Premium Wellness Plan", price: "$49.99", period: "per month", highlights: "Includes monthly check-ins, custom wellness journals, and priority phone support." }
    ],
    faqs: [
      { q: "Can I consult via video call?", a: "Yes, we offer encrypted video sessions, standard voice calls, and in-person slots at our local branches." },
      { q: "Can the pharmacist prescribe new medicines?", a: "Pharmacists cannot write new prescriptions. However, we can consult with your doctor to adjust dosages or request refills." }
    ]
  },
  {
    id: "health-screening",
    name: "In-Store Health Screenings",
    shortDescription: "Drop by our physical store for quick blood pressure, glucose, and cholesterol checks.",
    longDescription: "Stay on top of your vital health metrics. Visit any MedPlus pharmacy outlet to get immediate, professional screening services with no appointments required.",
    features: [
      "Blood Pressure & Heart Rate Monitoring",
      "Blood Glucose (Diabetic Screening)",
      "Total Cholesterol Level Checks",
      "Body Mass Index (BMI) & Wellness Assessment"
    ],
    priceTiers: [
      { name: "Basic Checkup", price: "$9.99", period: "per checkup", highlights: "Blood pressure, pulse rate, and basic BMI calculations." },
      { name: "Diabetic Panel", price: "$19.99", period: "per checkup", highlights: "Fasting blood glucose test, dietary tips, and blood pressure monitoring." },
      { name: "Complete Health Panel", price: "$34.99", period: "per checkup", highlights: "Glucose, cholesterol panel, blood pressure, weight evaluation, and pharmacist consultation." }
    ],
    faqs: [
      { q: "Do I need to fast before screening?", a: "For accurate blood glucose and cholesterol panels, we recommend fasting for at least 8 to 12 hours prior to the test." },
      { q: "How fast do I get the results?", a: "All basic panel tests are done in-store using point-of-care devices, providing results in less than 15 minutes." }
    ]
  }
];

window.medPlusBlogs = [
  {
    id: "boost-immunity",
    title: "5 Natural Ways to Boost Your Immunity This Season",
    category: "wellness",
    author: "Dr. Sarah Jenkins",
    date: "July 12, 2026",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    description: "Explore the best ways to protect your immune system naturally using diet, hydration, exercise, and science-backed supplements.",
    content: "Your immune system is a complex network of cells and organs that defend your body against infections. To boost its efficiency naturally, focus on a high-nutrient diet rich in Vitamin C, Zinc, and antioxidants. Ensure you get 7-8 hours of quality sleep daily, as sleep is vital for cellular repair. Stay physically active with at least 30 minutes of moderate daily exercise. Don't forget proper hydration, and consider clinical-grade supplements like elderberry or probiotics if recommended by your doctor."
  },
  {
    id: "baby-skin-care",
    title: "A Parent's Guide to Sensitive Baby Skin Care",
    category: "baby-care",
    author: "Clara Reynolds, Pediatric Nurse",
    date: "June 28, 2026",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1600&q=80",
    description: "Learn how to select baby products, manage diaper rash, and keep your child's delicate skin barrier hydrated.",
    content: "A baby's skin is 30% thinner than an adult's, making it highly susceptible to irritation, dryness, and allergies. When caring for your baby, avoid harsh soaps containing chemical fragrances, parabens, or sulfates. Use lukewarm water for baths and limit bath time to 10 minutes. Pat skin dry gently instead of rubbing, and immediately apply a hypoallergenic moisturizing lotion or ointment. Change diapers frequently and apply a barrier zinc-oxide cream to protect from diaper rash."
  },
  {
    id: "manage-hypertension",
    title: "Understanding and Managing Hypertension at Home",
    category: "medicines",
    author: "David Vance, PharmD",
    date: "May 15, 2026",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80",
    description: "A comprehensive guide on tracking blood pressure, adjusting sodium intake, and safely adhering to cardiovascular medications.",
    content: "Hypertension, or high blood pressure, is often called a silent killer because it can show no signs before causing cardiovascular damage. Regular home tracking is essential. Measure your blood pressure at the same time daily, sitting with your arm supported. Reduce daily sodium intake to under 1500mg, incorporate potassium-rich foods, and exercise regularly. Most importantly, adhere strictly to prescribed antihypertensives, even if your blood pressure readings appear normal."
  },
  {
    id: "medicine-safety",
    title: "Important Medicine Safety Rules Everyone Should Know",
    category: "medicines",
    author: "Marcus Brody, Chief Pharmacist",
    date: "April 02, 2026",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    description: "Learn standard guidelines for pill storage, checking expiration dates, and avoiding dangerous drug interactions.",
    content: "Keeping yourself and your family safe begins with correct medicine management. Always store medications in a cool, dry place away from heat and moisture (avoiding bathroom cabinets). Review expiry dates semi-annually and discard expired drugs safely. Never share prescription medications. Be alert to double-dosing risks by checking active ingredients, especially with over-the-counter flu medicines, to avoid accidental paracetamol toxicity."
  },
  {
    id: "diabetes-management",
    title: "Understanding and Managing Type-2 Diabetes Daily",
    category: "medicines",
    author: "Dr. Sarah Jenkins",
    date: "March 20, 2026",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    description: "Crucial insights on digital glucose monitoring, physical exercise, and insulin schedules for active patients.",
    content: "Managing Type-2 Diabetes requires daily balance between diet, physical activity, glucose tracking, and medication. Test your blood sugar levels regularly as prescribed by your practitioner. Plan your meals carefully, emphasizing complex carbohydrates, fiber, and lean proteins while minimizing simple sugars. Try to achieve 150 minutes of moderate cardiovascular exercises weekly. If prescribed oral hypoglycemics or insulin, strictly align doses with meals to prevent hypoglycemia."
  },
  {
    id: "morning-wellness-routine",
    title: "How to Build a Sustainable Morning Wellness Routine",
    category: "wellness",
    author: "David Vance, PharmD",
    date: "February 10, 2026",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    description: "A clinician's guide to morning hydration, light stretches, vitamin schedules, and mental health setup.",
    content: "A healthy morning routine primes your biological systems for daily stresses. Start by drinking a tall glass of room-temperature water to rehydrate. Spend 5 to 10 minutes performing light stretches or yoga poses. If you take daily multivitamins or probiotics, consume them alongside a nutritious, balanced breakfast to maximize absorption and reduce stomach sensitivity. Limit digital screen use during your first hour awake to maintain low morning cortisol levels."
  }
];
