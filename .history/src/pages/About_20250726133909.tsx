import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="relative bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About An Giang
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl">
            Learn about Vietnam's fascinating western province
          </p>
        </div>
      </header>
      
      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>The Province of An Giang</CardTitle>
              </CardHeader>
              <CardContent className="prose lg:prose-lg">
                <p>
                  An Giang is a province in the Mekong Delta region of southwestern Vietnam. It borders Cambodia to the northwest and is known for its beautiful landscapes, 
                  diverse cultural heritage, and rich history. The province covers an area of approximately 3,536 square kilometers 
                  and has a population of about 2.1 million people.
                </p>
                
                <h3>Geography and Climate</h3>
                <p>
                  An Giang is characterized by its vast rice fields, winding rivers, and mountain ranges. The province is traversed by 
                  two branches of the Mekong River: the Tiền River and the Hậu River. In the western part of the province lies the 
                  Seven Mountains (Thất Sơn) range, a group of small mountains with significant cultural and religious importance.
                </p>
                <p>
                  The climate in An Giang is tropical with two distinct seasons: the rainy season (May to November) and the dry season 
                  (December to April). The average temperature ranges from 26°C to 29°C throughout the year.
                </p>
                
                <h3>History</h3>
                <p>
                  An Giang has a rich history that dates back to the Khmer Empire. It later became part of the Nguyễn Lords' territory 
                  and was one of the first provinces to be established in southern Vietnam. During the Vietnam War, An Giang was 
                  a strategic location and witnessed numerous military operations.
                </p>
                
                <h3>Economy</h3>
                <p>
                  Agriculture, particularly rice cultivation, is the backbone of An Giang's economy. The province is one of Vietnam's 
                  largest rice producers. Fishing and aquaculture, especially catfish farming, also contribute significantly to the local 
                  economy. In recent years, tourism has been growing as an important economic sector.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Culture and Traditions</CardTitle>
              </CardHeader>
              <CardContent className="prose lg:prose-lg">
                <p>
                  An Giang is home to diverse ethnic groups, including Kinh (Viet), Khmer, Cham, and Hoa (Chinese), each contributing 
                  to the province's rich cultural tapestry. This diversity is reflected in local festivals, architecture, cuisine, and religious practices.
                </p>
                
                <h3>Festivals</h3>
                <p>
                  Some notable festivals in An Giang include:
                </p>
                <ul>
                  <li>
                    <strong>Bà Chúa Xứ Festival</strong> (Lady of the Realm Festival): Held annually at Sam Mountain from the 23rd to 
                    the 27th of the fourth lunar month. This is one of the largest festivals in the Mekong Delta, attracting millions 
                    of pilgrims and tourists.
                  </li>
                  <li>
                    <strong>Ox Racing Festival</strong>: A unique cultural event of the Khmer people, usually held after the harvest season.
                  </li>
                  <li>
                    <strong>Floating Season</strong>: Not a traditional festival but a natural phenomenon when the Mekong River floods, 
                    creating a unique landscape and way of life.
                  </li>
                </ul>
                
                <h3>Cuisine</h3>
                <p>
                  An Giang's cuisine is influenced by its geography, history, and ethnic diversity. The province is known for dishes such as:
                </p>
                <ul>
                  <li>
                    <strong>Bún Cá</strong> (Fish Noodle Soup): A specialty of Châu Đốc city, featuring rice vermicelli with fish in a flavorful broth.
                  </li>
                  <li>
                    <strong>Mắm</strong> (Fermented Fish): Various types of fermented fish products that serve as key ingredients in many local dishes.
                  </li>
                  <li>
                    <strong>Lẩu Mắm</strong> (Fermented Fish Hotpot): A savory hotpot dish made with fermented fish, vegetables, and various meats.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Capital</dt>
                    <dd className="mt-1 text-base">Long Xuyên</dd>
                  </div>
                  <Separator />
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Area</dt>
                    <dd className="mt-1 text-base">3,536 km²</dd>
                  </div>
                  <Separator />
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Population</dt>
                    <dd className="mt-1 text-base">~2.1 million</dd>
                  </div>
                  <Separator />
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Languages</dt>
                    <dd className="mt-1 text-base">Vietnamese, Khmer, Cham</dd>
                  </div>
                  <Separator />
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Major Cities</dt>
                    <dd className="mt-1 text-base">Long Xuyên, Châu Đốc, Tân Châu</dd>
                  </div>
                  <Separator />
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Climate</dt>
                    <dd className="mt-1 text-base">Tropical monsoon</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Best Time to Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The best time to visit An Giang depends on what you want to experience:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Dry Season (Dec-Apr):</strong> Ideal for general sightseeing and mountain climbing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Floating Season (Aug-Nov):</strong> Unique landscape when fields are flooded
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Harvest Season (Nov-Dec):</strong> Beautiful golden rice fields
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      <strong>Festival Time (Apr-May):</strong> Experience local cultural events
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">An Giang Tourism</h3>
              <p className="mt-2 text-sm text-blue-200">
                Discover the beauty of Vietnam's western province
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center md:text-right text-sm">
                &copy; 2025 An Giang Tourism Board. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}