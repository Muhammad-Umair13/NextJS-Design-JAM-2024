import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: "1ovg4bzy",
  dataset: "production",
  useCdn: false,
  token: "skjHNQ29RBPde9qLYCxzeB9wnLClRTqM5cLSD1Pvwzp8OVuPWlyJLOIqe6FAQbAoKRu8TZVXFyZliXQLTO9r6izRtNJ89RLgeUPtbkpm0myLqcaU2uEgHXveSSM8quwoqerRVxLxtGSSB5xe5gmrswCuaYr5Yk196J17g4WjnC6yMmLdfcIm",
  apiVersion: '2021-08-31'
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop()
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function importData() {
  try {
    console.log('Fetching car data from API...');

    // API endpoint containing car data
    const response = await axios.get('https://sanity-nextjs-application.vercel.app/api/hackathon/template7');
    const cars = response.data;

    console.log(`Fetched ${cars.length} cars`);

    const descriptions = {
      "Koenigsegg": "Experience the thrill of high-speed adventure with this sporty marvel. Perfect for two, it offers a manual transmission and a robust 90L fuel capacity.",
      "Nissan GT-R": "A stylish sports car that blends power and elegance. With its manual transmission and 80L fuel capacity, it’s ideal for enthusiasts seeking a dynamic drive.",
      "Rolls-Royce": "Redefining luxury with its spacious sedan design, this car comfortably seats four and boasts a 70L fuel capacity.",
      "Tesla Model 3": "A futuristic electric car offering eco-friendly luxury. With a 100kWh battery and room for five, it's a modern masterpiece.",
      "Ford Mustang": "A classic gasoline-powered car known for its muscle and style. Seats four and provides a thrilling manual transmission ride.",
      "BMW X5": "A versatile diesel SUV perfect for families, offering seating for seven and a 70L fuel tank.",
      "Audi A6": "A hybrid sedan that combines efficiency with sophistication. Seats five and provides a comfortable, stylish ride.",
      "Mercedes-Benz C-Class": "A premium gasoline sedan, known for its performance and elegance. With a 65L fuel capacity and seating for five, it exudes class.",
      "Porsche 911": "A luxury sports car that defines performance and prestige. Gasoline-powered, seats four, and perfect for high-end experiences.",
      "Chevrolet Camaro": "A powerful gasoline-powered sports car offering style and speed. Seats four and features a 70L fuel capacity.",
      "Nissan Altima": "A hybrid sedan that blends performance with fuel efficiency. Seats five and offers a smooth manual transmission.",
      "Rolls-Royce (SUV)": "A luxury SUV designed for comfort and style, seating six with a 70L fuel capacity for extended journeys.",
      "CR-V": "A robust SUV designed for practicality and adventure. Seats six with an 80L fuel capacity.",
      "All New Terlos": "A spacious SUV perfect for family trips, offering seating for six and a 90L fuel capacity for long drives.",
      "MG ZX Exclusive": "A compact hatchback that combines efficiency with style. Seats two and features a 90L fuel tank for long journeys."
    };
    
    
    for (const car of cars) {
      console.log(`Processing car: ${car.name}`);

      let imageRef = null;
      if (car.image_url) {
        imageRef = await uploadImageToSanity(car.image_url);
      }

      const sanityCar = {
        _type: 'car',
        name: car.name,
        brand: car.brand || null,
        type: car.type,
        fuelCapacity: car.fuel_capacity,
        transmission: car.transmission,
        seatingCapacity: car.seating_capacity,
        pricePerDay: car.price_per_day,
        originalPrice: car.original_price || null,
        tags: car.tags || [],
        image: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef,
          },
        } : undefined,
        description: descriptions[car.name] || "Description not available for this car.", // Add description here
      };

      console.log('Uploading car to Sanity:', sanityCar.name);
      const result = await client.create(sanityCar);
      console.log(`Car uploaded successfully: ${result._id}`);
    }

    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

importData();