# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(id: 1, username: "guest", password: "password")
User.create(id: 2, username: "tyler", password: "password", picture_url: "http://res.cloudinary.com/dfmvfna21/image/upload/v1478046196/Fields2_xkwxzq.jpg")

Roaster.create(id: 1, name: "Safe Camp Coffee", picture_url: "http://res.cloudinary.com/dfmvfna21/image/upload/v1478278838/1qfPJuBe_iye7wm.jpg")
Roaster.create(id: 2, name: "James Coffee Co.", picture_url: "http://res.cloudinary.com/dfmvfna21/image/upload/v1478282408/5061261_300x300_szcbi4.jpg")
Roaster.create(id: 3, name: "Starbucks", picture_url: "http://res.cloudinary.com/dfmvfna21/image/upload/v1478284914/starbuckslogo_gmrnyn.png")
Roaster.create(id: 4, name: "Philz Coffee", picture_url: "http://res.cloudinary.com/dfmvfna21/image/upload/v1478285393/P13O4djR_iv9yat.png")
Roaster.create(id: 5, name: "Sightglass Coffee", picture_url: "http://res.cloudinary.com/dfmvfna21/image/upload/v1478285880/Sightglass-logo_qdds8y.jpg")

Drink.create(id: 1, name: 'Banner Dark', roaster_id: 5, roast_type: "Dark", description: "Notes of dark chocolate and brown sugar meet rich undertones of vanilla and maple.")
Drink.create(id: 2, name: 'Caffè Verona', roaster_id: 3, roast_type: "Dark", description: "Well-balanced and rich with a dark cocoa texture. Pair with dark chocolate to bring out even more sweetness.")
Drink.create(id: 3, name: 'Canopy of Heaven', roaster_id: 4, roast_type: "Light", description: "Featuring a classic lighter roast profile, this blend really shakes things up with its unique flavor profile. The Canopy of Heaven bursts with lively and complex flavors that will get your attention.")
Drink.create(id: 4, name: 'Columbia El Meridiano, Tolima', roaster_id: 5, roast_type: "Medium", description: "Round and approachable, flavors of red grape and orange zest, soft spiced cider aromas, and a toffee like sweetness.")
Drink.create(id: 5, name: 'Ethiopia "AYEHU" RFA', roaster_id: 2, roast_type: "Medium", description: "Wild Ethiopian varieties. Natural processing, Sweet red berry, caramel, clean, juicy, and dark chocolate tasting notes. From the Awi Zone, Amhara Region. Grown at an altitude of 1600-1700m. Roasted in San Diego, CA.")
Drink.create(id: 6, name: 'Ethiopian Harar', roaster_id: 1, roast_type: "Medium", description: "Heavy-bodied, spicy and fragrant, Ethiopian Harrar coffee is a wild and exotic dry processed (natural) Arabica coffee that is grown on small farms in the Oromia region (formerly Harrar) in southern Ethiopia at elevations between 4,500 and 6,300 feet. The province of Harrar, is east of Addis Ababa, the country's capitol.")
Drink.create(id: 7, name: 'Guatemala "TG-LAB FÁTIMA"', roaster_id: 2, roast_type: "Medium", description: "Juicy, blood orange, macadamia nut, and creamy full body tasting notes. From the Alta Varapaz region. Grown at an altitude of 1200-1450m. Roasted in San Diego, CA.")
Drink.create(id: 8, name: 'Honduras Santa Rosa De Copan', roaster_id: 1, roast_type: "Dark", description: "Lote Mendez has a burned sugar sweetness, with high % dark chocolate bar, roasted cacao nibs, sweet pipe tobacco, and honey wheat. A BIG bodied cup.")
Drink.create(id: 9, name: 'Juturna Blend', roaster_id: 2, roast_type: "Medium-Light", description: "Roasted for Circa Survive Juturna 10 Year Anniversary tour. Limited to 200 bags. Roasted in San Diego, CA.")
Drink.create(id: 10, name: 'Kenya Kangunu AA', roaster_id: 5, roast_type: "Light", description: "This coffee boasts complexity and clarity. Lush and syrupy with hints of tart mandarin, blackberry, and brown sugar.")
Drink.create(id: 11, name: 'Night Owl', roaster_id: 2, roast_type: "Dark", description: "Organic blend of rich heavy bodied coffee with dark notes of hazelnut and maple syrup. Roasted in San Diego, CA.")
Drink.create(id: 12, name: 'Philtered Soul', roaster_id: 4, roast_type: "Medium", description: "Philtered Soul has distinctively nutty flavors with a satisfying aftertaste that’s sure to please your soul. It’s become the blend of choice for many who frequent our cafes.")
Drink.create(id: 13, name: 'Pike Place', roaster_id: 3, roast_type: "Medium", description: "A smooth, well-rounded blend of Latin American coffees with subtly rich flavors of cocoa and toasted nuts, it’s perfect for every day.")
Drink.create(id: 14, name: 'SFMOMA', roaster_id: 5, roast_type: "Light", description: "Vivid flavors of citrus fruit give way to sweet, deep caramel and milk chocolate undertones.")
Drink.create(id: 15, name: 'Tantalizing Turkish', roaster_id: 4, roast_type: "Medium", description: "Tantalizing Turkish is exceptionally flavorful and unique due to its intensely rich and familiar characteristics of traditional Turkish coffee.")
Drink.create(id: 16, name: 'Veranda Blend', roaster_id: 3, roast_type: "Light", description: "A shorter roast time, lighter body and mellow flavors. Subtle with delicate nuances of soft cocoa and lightly toasted nuts.")
Drink.create(id: 17, name: 'White Owl', roaster_id: 2, roast_type: "Light", description: "An organic blend with radiant sweet bright red berry, creamy vanilla and a light coca finish. Roasted in San Diego, CA.")
Drink.create(id: 18, name: 'Willow Blend', roaster_id: 3, roast_type: "Light", description: "The lighter roast reveals the juicy lemony notes we love to discover in African coffee, followed by a crisp finish courtesy of the Latin American beans. Graceful with a deep, enveloping flavor, it's everything you'd want from a light roast—and much more than you'd expect.")
