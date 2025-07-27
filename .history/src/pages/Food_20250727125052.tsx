import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const foodCategories = [
  {
    id: "rice-dishes",
    name: "Rice Dishes",
    items: [
      {
        name: "Cơm Tấm",
        description: "Broken rice served with grilled pork, egg, and vegetables. A popular dish throughout Southern Vietnam with regional variations in An Giang.",
        origin: "Popular throughout Southern Vietnam, including An Giang"
      },
      {
        name: "Cơm Lá Sen",
        description: "Rice cooked in lotus leaf, giving it a unique fragrance and flavor. Often served with local specialties from the region.",
        origin: "Mekong Delta region, including An Giang"
      },
      {
        name: "Cơm Hến",
        description: "Rice with baby clams, herbs, and various condiments. In An Giang, this dish often uses clams from the local rivers.",
        origin: "Adapted from Central Vietnam but with local ingredients"
      }
    ]
  },
  {
    id: "noodle-dishes",
    name: "Noodle Dishes",
    items: [
      {
        name: "Bún Cá (Fish Noodle Soup)",
        description: "A specialty of Chau Doc, featuring rice vermicelli with snakehead fish, fish cake, and vegetables in a flavorful broth made from fish bones.",
        origin: "Chau Doc, An Giang"
      },
      {
        name: "Bún Nước Lèo",
        description: "A Khmer-influenced noodle soup with a rich broth made from fermented fish, pork, and various herbs. Commonly found in areas with Khmer communities.",
        origin: "Khmer communities in An Giang"
      },
      {
        name: "Hủ Tiếu Sa Đéc",
        description: "A type of rice noodle soup that originates from Sa Dec but is popular throughout the Mekong Delta, including An Giang. Made with pork, shrimp, and various herbs.",
        origin: "Mekong Delta region"
      },
      {
        name: "Bánh Canh",
        description: "A thick noodle soup made from tapioca or rice flour, served with fish or pork. The An Giang version often features local river fish.",
        origin: "Southern Vietnam, with local variations in An Giang"
      }
    ]
  },
  {
    id: "fermented-foods",
    name: "Fermented Delicacies",
    items: [
      {
        name: "Mắm Châu Đốc",
        description: "Various types of fermented fish products from Chau Doc, considered some of the best in Vietnam. Used as ingredients in many dishes or eaten directly with rice.",
        origin: "Chau Doc, An Giang"
      },
      {
        name: "Lẩu Mắm",
        description: "A savory hotpot dish made with fermented fish, vegetables, and various meats. A signature dish of the Mekong Delta region.",
        origin: "Mekong Delta region, including An Giang"
      },
      {
        name: "Mắm Ruốc",
        description: "Fermented shrimp paste used as a condiment or cooking ingredient. The An Giang version has its own distinct flavor.",
        origin: "An Giang province"
      },
      {
        name: "Mắm Kho Quẹt",
        description: "A dipping sauce made from caramelized fermented fish, often eaten with fresh vegetables and rice.",
        origin: "Mekong Delta region"
      }
    ]
  },
  {
    id: "street-foods",
    name: "Street Foods",
    items: [
      {
        name: "Bánh Xèo",
        description: "Crispy savory pancakes filled with bean sprouts, shrimp, and meat. The An Giang version is typically smaller and crispier than those found in other regions.",
        origin: "Southern Vietnam, with local variations"
      },
      {
        name: "Bánh Khọt",
        description: "Small round savory pancakes topped with shrimp, often served with herbs and dipping sauce.",
        origin: "Southern Vietnam"
      },
      {
        name: "Bánh Bò Thốt Nốt",
        description: "A sweet, soft cake made with palm sugar from the Thot Not palm trees that are native to An Giang.",
        origin: "An Giang province"
      },
      {
        name: "Chè Thốt Nốt",
        description: "A sweet soup dessert made with palm fruit from the Thot Not palm trees, a specialty of the region.",
        origin: "An Giang province"
      }
    ]
  }
];

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">    
      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {/* Introduction */}
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <div className="prose lg:prose-lg mx-auto">
                <h2>An Giang's Culinary Heritage</h2>
                <p>
                  An Giang's cuisine is as diverse as its landscape and cultural heritage. Located in the fertile 
                  Mekong Delta and influenced by various ethnic groups including Vietnamese, Khmer, and Cham, 
                  the province offers a rich tapestry of flavors that reflect its history and geography.
                </p>
                <p>
                  With abundant access to fresh fish from the Mekong River, verdant rice fields, and tropical 
                  fruits and vegetables, An Giang's food is characterized by its freshness, balance of flavors, 
                  and innovative use of local ingredients. Particularly famous are the fermented fish products 
                  (mắm) from Chau Doc, which have gained recognition throughout Vietnam.
                </p>
                <p>
                  Below you'll find some of the most distinctive and delicious foods that An Giang has to offer, 
                  categorized to help you explore this culinary paradise.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Food categories tabs */}
          <Tabs defaultValue="rice-dishes" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              {foodCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {foodCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((food, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="h-40 bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">
                          Image placeholder for {food.name}
                        </span>
                      </div>
                      <CardHeader>
                        <CardTitle>{food.name}</CardTitle>
                        <CardDescription className="text-sm">{food.origin}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{food.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Culinary Tips */}
          <Card className="shadow-md bg-amber-50">
            <CardHeader>
              <CardTitle>Culinary Tips for Visitors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">When to Eat</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Breakfast (6-9 AM): Try Bún Cá or Hủ Tiếu</li>
                    <li>Lunch (11 AM-1 PM): Perfect for rice dishes</li>
                    <li>Dinner (6-8 PM): Ideal for hotpots and shared meals</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Where to Eat</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Local markets for authentic street food</li>
                    <li>Chau Doc city for the best fermented fish dishes</li>
                    <li>Riverside restaurants for fresh fish</li>
                    <li>Homestays for traditional home cooking</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Seasonal Specialties</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Floating season (Aug-Nov): Wild fish dishes</li>
                    <li>Harvest season (Dec-Jan): Fresh rice dishes</li>
                    <li>Summer (Apr-Jun): Tropical fruit desserts</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Etiquette Tips</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Always use your right hand for passing food</li>
                    <li>Try a bit of everything when sharing dishes</li>
                    <li>Slurping noodles is acceptable and even appreciated</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
    </div>
  );
}