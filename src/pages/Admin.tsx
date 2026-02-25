import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  useDestinationsData,
  useDistrictsData,
  useFoodCategoriesData,
} from '@/hooks/useData';
import type {
  Destination,
  FoodCategory as FullFoodCategory,
  District,
} from '@/types';

type DestinationItem = Destination;
type FoodCategory = FullFoodCategory;
type DistrictItem = Pick<District, 'id' | 'name' | 'description' | 'image'>;

export default function AdminPage() {
  const destinationsData = useDestinationsData();
  const foodsData = useFoodCategoriesData();
  const districtsData = useDistrictsData();
  const destinations = destinationsData.items;
  const foods = foodsData.items;
  const districts = districtsData.items.map<DistrictItem>((d) => ({
    id: d.id,
    name: d.name,
    description: d.description,
    image: d.image,
  }));

  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'destinations';

  const handleTabChange = (value: string) => {
    setSearchParams(
      (prev) => {
        prev.set('tab', value);
        return prev;
      },
      { replace: true }
    );
  };

  const [isDestDialogOpen, setIsDestDialogOpen] = useState(false);
  const [isFoodDialogOpen, setIsFoodDialogOpen] = useState(false);
  const [isDistrictDialogOpen, setIsDistrictDialogOpen] = useState(false);

  const [editingDest, setEditingDest] = useState<DestinationItem | null>(null);
  const [editingFood, setEditingFood] = useState<FoodCategory | null>(null);
  const [editingDistrict, setEditingDistrict] = useState<DistrictItem | null>(
    null
  );

  const nextDestId = useMemo(
    () => destinationsData.nextId,
    [destinationsData.nextId]
  );

  return (
    <div className='min-h-screen bg-amber-50'>
      <main className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <h2 className='text-3xl font-bold text-amber-900'>
            Quản trị nội dung
          </h2>
          <p className='text-amber-700 mt-2'>
            Giao diện quản trị chỉ là UI. Kết nối API để lưu dữ liệu thật khi
            backend sẵn sàng.
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className='w-full'
        >
          <TabsList className='grid grid-cols-3 w-full bg-white/80 backdrop-blur-sm border border-amber-200 rounded-xl p-1 shadow-lg'>
            <TabsTrigger
              value='destinations'
              className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white rounded-lg'
            >
              Điểm đến
            </TabsTrigger>
            <TabsTrigger
              value='foods'
              className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white rounded-lg'
            >
              Ẩm thực
            </TabsTrigger>
            <TabsTrigger
              value='districts'
              className='data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white rounded-lg'
            >
              Địa phương
            </TabsTrigger>
          </TabsList>

          <TabsContent value='destinations' className='pt-8'>
            <Card className='shadow-xl bg-white/95 backdrop-blur-sm border-0 overflow-hidden'>
              <CardHeader className='flex flex-row items-center justify-between'>
                <CardTitle className='text-amber-900'>Điểm đến</CardTitle>
                <Dialog
                  open={isDestDialogOpen}
                  onOpenChange={(o) => {
                    setIsDestDialogOpen(o);
                    if (!o) setEditingDest(null);
                  }}
                >
                  <DialogTrigger asChild>
                    <Button className='bg-amber-600 hover:bg-amber-700'>
                      Thêm
                    </Button>
                  </DialogTrigger>
                  <DestForm
                    initialValue={
                      editingDest ??
                      ({
                        id: nextDestId,
                        name: '',
                        description: '',
                        images: [],
                        foods: [],
                        description_news: '',
                        story: '',
                        images_news: [],
                        address: '',
                      } as Destination)
                    }
                    onCancel={() => {
                      setIsDestDialogOpen(false);
                      setEditingDest(null);
                    }}
                    onSubmit={(value) => {
                      if (editingDest) {
                        destinationsData.update(editingDest.id, {
                          name: value.name,
                          description: value.description,
                        });
                      } else {
                        destinationsData.add({
                          id: value.id,
                          name: value.name,
                          description: value.description,
                          images: value.images ?? [],
                          foods: value.foods ?? [],
                        } as Destination);
                      }
                      setIsDestDialogOpen(false);
                      setEditingDest(null);
                    }}
                  />
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='w-24'>ID</TableHead>
                      <TableHead>Tên</TableHead>
                      <TableHead>Mô tả</TableHead>
                      <TableHead className='w-40 text-right'>
                        Thao tác
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {destinations.length === 0 && (
                      <TableRow>
                        <TableCell
                          colSpan={4}
                          className='text-center text-amber-700'
                        >
                          Chưa có dữ liệu. Nhấn “Thêm” để tạo mới.
                        </TableCell>
                      </TableRow>
                    )}
                    {destinations.map((d) => (
                      <TableRow key={d.id}>
                        <TableCell>{d.id}</TableCell>
                        <TableCell className='font-medium text-amber-900'>
                          {d.name}
                        </TableCell>
                        <TableCell className='text-amber-800'>
                          {d.description}
                        </TableCell>
                        <TableCell className='text-right space-x-2'>
                          <Button
                            variant='outline'
                            onClick={() => {
                              setEditingDest(d);
                              setIsDestDialogOpen(true);
                            }}
                          >
                            Sửa
                          </Button>
                          <Button
                            variant='destructive'
                            onClick={() => destinationsData.remove(d.id)}
                          >
                            Xóa
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='foods' className='pt-8'>
            <Card className='shadow-xl bg-white/95 backdrop-blur-sm border-0 overflow-hidden'>
              <CardHeader className='flex flex-row items-center justify-between'>
                <CardTitle className='text-amber-900'>
                  Danh mục ẩm thực
                </CardTitle>
                <Dialog
                  open={isFoodDialogOpen}
                  onOpenChange={(o) => {
                    setIsFoodDialogOpen(o);
                    if (!o) setEditingFood(null);
                  }}
                >
                  <DialogTrigger asChild>
                    <Button className='bg-amber-600 hover:bg-amber-700'>
                      Thêm
                    </Button>
                  </DialogTrigger>
                  <FoodForm
                    initialValue={
                      editingFood ?? { id: '', name: '', items: [] }
                    }
                    onCancel={() => {
                      setIsFoodDialogOpen(false);
                      setEditingFood(null);
                    }}
                    onSubmit={(value) => {
                      if (!value.id) return;
                      if (editingFood) {
                        foodsData.update(editingFood.id, {
                          name: value.name,
                          items: value.items,
                        });
                      } else {
                        foodsData.add({
                          id: value.id,
                          name: value.name,
                          items: [],
                        } as FullFoodCategory);
                      }
                      setIsFoodDialogOpen(false);
                      setEditingFood(null);
                    }}
                  />
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='w-24'>ID</TableHead>
                      <TableHead>Tên</TableHead>
                      <TableHead>Mô tả</TableHead>
                      <TableHead className='w-40 text-right'>
                        Thao tác
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {foods.length === 0 && (
                      <TableRow>
                        <TableCell
                          colSpan={4}
                          className='text-center text-amber-700'
                        >
                          Chưa có dữ liệu. Nhấn “Thêm” để tạo mới.
                        </TableCell>
                      </TableRow>
                    )}
                    {foods.map((f) => (
                      <TableRow key={f.id}>
                        <TableCell>{f.id}</TableCell>
                        <TableCell className='font-medium text-amber-900'>
                          {f.name}
                        </TableCell>
                        <TableCell className='text-amber-800'>
                          {f.items?.length ?? 0}
                        </TableCell>
                        <TableCell className='text-right space-x-2'>
                          <Button
                            variant='outline'
                            onClick={() => {
                              setEditingFood(f);
                              setIsFoodDialogOpen(true);
                            }}
                          >
                            Sửa
                          </Button>
                          <Button
                            variant='destructive'
                            onClick={() => foodsData.remove(f.id)}
                          >
                            Xóa
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='districts' className='pt-8'>
            <Card className='shadow-xl bg-white/95 backdrop-blur-sm border-0 overflow-hidden'>
              <CardHeader className='flex flex-row items-center justify-between'>
                <CardTitle className='text-amber-900'>Địa phương</CardTitle>
                <Dialog
                  open={isDistrictDialogOpen}
                  onOpenChange={(o) => {
                    setIsDistrictDialogOpen(o);
                    if (!o) setEditingDistrict(null);
                  }}
                >
                  <DialogTrigger asChild>
                    <Button className='bg-amber-600 hover:bg-amber-700'>
                      Thêm
                    </Button>
                  </DialogTrigger>
                  <DistrictForm
                    initialValue={
                      editingDistrict ?? {
                        id: '',
                        name: '',
                        description: '',
                        image: '',
                      }
                    }
                    onCancel={() => {
                      setIsDistrictDialogOpen(false);
                      setEditingDistrict(null);
                    }}
                    onSubmit={(value) => {
                      if (!value.id) return;
                      if (editingDistrict) {
                        districtsData.update(editingDistrict.id, {
                          name: value.name,
                          description: value.description,
                        });
                      } else {
                        districtsData.add({
                          id: value.id,
                          name: value.name,
                          description: value.description ?? '',
                          image: '',
                          attractions: [],
                          cuisine: [],
                        } as District);
                      }
                      setIsDistrictDialogOpen(false);
                      setEditingDistrict(null);
                    }}
                  />
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='w-40'>Mã</TableHead>
                      <TableHead>Tên</TableHead>
                      <TableHead>Mô tả</TableHead>
                      <TableHead className='w-40 text-right'>
                        Thao tác
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {districts.length === 0 && (
                      <TableRow>
                        <TableCell
                          colSpan={4}
                          className='text-center text-amber-700'
                        >
                          Chưa có dữ liệu. Nhấn “Thêm” để tạo mới.
                        </TableCell>
                      </TableRow>
                    )}
                    {districts.map((d) => (
                      <TableRow key={d.id}>
                        <TableCell>{d.id}</TableCell>
                        <TableCell className='font-medium text-amber-900'>
                          {d.name}
                        </TableCell>
                        <TableCell className='text-amber-800'>
                          {d.description}
                        </TableCell>
                        <TableCell className='text-right space-x-2'>
                          <Button
                            variant='outline'
                            onClick={() => {
                              setEditingDistrict(d);
                              setIsDistrictDialogOpen(true);
                            }}
                          >
                            Sửa
                          </Button>
                          <Button
                            variant='destructive'
                            onClick={() => districtsData.remove(d.id)}
                          >
                            Xóa
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function DestForm({
  initialValue,
  onSubmit,
  onCancel,
}: {
  initialValue: DestinationItem;
  onSubmit: (value: DestinationItem) => void;
  onCancel: () => void;
}) {
  const [value, setValue] = useState<DestinationItem>(initialValue);
  return (
    <DialogContent className='sm:max-w-[600px]'>
      <DialogHeader>
        <DialogTitle>
          {initialValue.id ? 'Lưu điểm đến' : 'Thêm điểm đến'}
        </DialogTitle>
      </DialogHeader>
      <div className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-amber-800 mb-1'>
            Tên
          </label>
          <Input
            value={value.name}
            onChange={(e) => setValue((v) => ({ ...v, name: e.target.value }))}
            placeholder='Nhập tên'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-amber-800 mb-1'>
            Mô tả
          </label>
          <Textarea
            value={value.description}
            onChange={(e) =>
              setValue((v) => ({ ...v, description: e.target.value }))
            }
            placeholder='Mô tả ngắn'
            rows={5}
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-amber-800 mb-1'>
            Ảnh (mỗi dòng một URL)
          </label>
          <Textarea
            value={(value.images ?? []).join('\n')}
            onChange={(e) =>
              setValue((v) => ({
                ...v,
                images: e.target.value
                  .split('\n')
                  .map((x) => x.trim())
                  .filter(Boolean),
              }))
            }
            placeholder='/images/..., https://...'
            rows={4}
          />
        </div>
        <div className='flex justify-end gap-2 pt-2'>
          <Button variant='outline' onClick={onCancel}>
            Hủy
          </Button>
          <Button
            className='bg-amber-600 hover:bg-amber-700'
            onClick={() => onSubmit(value)}
          >
            Lưu
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}

function FoodForm({
  initialValue,
  onSubmit,
  onCancel,
}: {
  initialValue: FoodCategory;
  onSubmit: (value: FoodCategory) => void;
  onCancel: () => void;
}) {
  const [value, setValue] = useState<FoodCategory>(initialValue);
  return (
    <DialogContent className='sm:max-w-[600px]'>
      <DialogHeader>
        <DialogTitle>
          {initialValue.id ? 'Lưu danh mục' : 'Thêm danh mục'}
        </DialogTitle>
      </DialogHeader>
      <div className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-amber-800 mb-1'>
            Mã
          </label>
          <Input
            value={value.id}
            onChange={(e) => setValue((v) => ({ ...v, id: e.target.value }))}
            placeholder='Ví dụ: rice-dishes'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-amber-800 mb-1'>
            Tên
          </label>
          <Input
            value={value.name}
            onChange={(e) => setValue((v) => ({ ...v, name: e.target.value }))}
            placeholder='Nhập tên danh mục'
          />
        </div>
        <div className='flex justify-end gap-2 pt-2'>
          <Button variant='outline' onClick={onCancel}>
            Hủy
          </Button>
          <Button
            className='bg-amber-600 hover:bg-amber-700'
            onClick={() => onSubmit(value)}
          >
            Lưu
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}

function DistrictForm({
  initialValue,
  onSubmit,
  onCancel,
}: {
  initialValue: DistrictItem;
  onSubmit: (value: DistrictItem) => void;
  onCancel: () => void;
}) {
  const [value, setValue] = useState<DistrictItem>(initialValue);
  return (
    <DialogContent className='sm:max-w-[600px]'>
      <DialogHeader>
        <DialogTitle>
          {initialValue.id ? 'Lưu địa phương' : 'Thêm địa phương'}
        </DialogTitle>
      </DialogHeader>
      <div className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-amber-800 mb-1'>
            Mã
          </label>
          <Input
            value={value.id}
            onChange={(e) => setValue((v) => ({ ...v, id: e.target.value }))}
            placeholder='Ví dụ: long-xuyen'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-amber-800 mb-1'>
            Tên
          </label>
          <Input
            value={value.name}
            onChange={(e) => setValue((v) => ({ ...v, name: e.target.value }))}
            placeholder='Tên hiển thị'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-amber-800 mb-1'>
            Ảnh đại diện
          </label>
          <Input
            value={value.image ?? ''}
            onChange={(e) => setValue((v) => ({ ...v, image: e.target.value }))}
            placeholder='/images/... hoặc https://...'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-amber-800 mb-1'>
            Mô tả
          </label>
          <Textarea
            value={value.description ?? ''}
            onChange={(e) =>
              setValue((v) => ({ ...v, description: e.target.value }))
            }
            placeholder='Mô tả ngắn'
            rows={4}
          />
        </div>
        <div className='flex justify-end gap-2 pt-2'>
          <Button variant='outline' onClick={onCancel}>
            Hủy
          </Button>
          <Button
            className='bg-amber-600 hover:bg-amber-700'
            onClick={() => onSubmit(value)}
          >
            Lưu
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}
