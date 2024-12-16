import { ArrowDown, CarIcon, HomeIcon, SecurityIcon } from "@/components/icons";
import Navbar from "@/components/shared/Navbar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import { Card, CardContent } from "@/components/ui/card";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, ChevronsUpDown, Turtle } from "lucide-react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { cn } from "@/lib/utils";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import ProductCard from "@/components/shared/cards/ProductCard";
import ScrollToTop from "@/components/shared/ScrollToTop";

const ProductSlug = () => {
    const [activeImg, setActiveImg] = React.useState(1)
    const [buyType, setBuyType] = React.useState('Полная оплата')
    const [popoverContentStatus, setPopoverContentStatus] = React.useState(true)
    const [isOpen, setIsOpen] = React.useState(false)
    const [price, setPrice] = React.useState(2500000)
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const location = useLocation()
    const { t } = useTranslation()

    const frameworks = [
        {
            value: "Полная оплата",
            label: t('Полная оплата'),
        },
        {
            value: "6-month",
            label: t('Рассрочка 6 месяцев'),
        },
        {
            value: "9-month",
            label: t('Рассрочка 9 месяцев'),
        },
        {
            value: "12-month",
            label: t('Рассрочка 12 месяцев'),
        },
    ]

    const products = [
        {
            name: "Wireless Headphones",
            brand: "SoundPro",
            price: 49.99,
            image: "https://example.com/images/headphones.jpg"
        },
        {
            name: "Smartphone",
            brand: "Apple",
            price: 999.99,
            image: "https://example.com/images/iphone.jpg"
        },
        {
            name: "Laptop",
            brand: "Dell",
            price: 1299.99,
            image: "https://example.com/images/laptop.jpg"
        },
        {
            name: "Wireless Headphones",
            brand: "SoundPro",
            price: 49.99,
            image: "https://example.com/images/headphones.jpg"
        },
        {
            name: "Smartphone",
            brand: "Apple",
            price: 999.99,
            image: "https://example.com/images/iphone.jpg"
        },
        {
            name: "Laptop",
            brand: "Dell",
            price: 1299.99,
            image: "https://example.com/images/laptop.jpg"
        }
    ]

    let mainPage = location.pathname.split('/')[1]
    let productName = location.pathname.split('/')[2].replace('%20', ' ')

    function formatPrice(number: number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    // const monthlyPrice = () => {
    //     frameworks.forEach(v => {
    //         switch (v.value) {
    //             case 'Полная оплата':
    //                 return ''
    //                 break;
    //             case '6-month':
    //                 return formatPrice(price / 6).slice(0, 7)
    //                 break;
    //             default:
    //                 break;
    //         }
    //     })
    // }
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <div className="container mx-auto px-8">
                <Breadcrumb className="mt-4">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">
                                <HomeIcon />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/product">
                                {t(`${mainPage}`)}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="capitalize">{productName}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="grid grid-cols-4 bg-pink-600 p-3 rounded-lg mt-6">
                    <div className="flex items-center gap-2">
                        <SecurityIcon />
                        <div>
                            <p className="font-bold text-[14px] text-white">Официальная гарантия</p>
                            <p className="text-[14px] text-white">на все товары</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <CarIcon />
                        <div>
                            <p className="font-bold text-[14px] text-white">Официальная гарантия</p>
                            <p className="text-[14px] text-white">на все товары</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <SecurityIcon />
                        <div>
                            <p className="font-bold text-[14px] text-white">Официальная гарантия</p>
                            <p className="text-[14px] text-white">на все товары</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <SecurityIcon />
                        <div>
                            <p className="font-bold text-[14px] text-white">Официальная гарантия</p>
                            <p className="text-[14px] text-white">на все товары</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-3 mt-8">
                    <div className="col-span-3 ">
                        <h2 className="text-3xl pl-8 mb-8 font-semibold">{productName}</h2>
                        <div className="flex gap-6">
                            <div className="flex flex-col gap-2">
                                <div onClick={() => setActiveImg(1)} style={{
                                    border: activeImg === 1 && '2px solid #16a34a'
                                }} className="w-[90px] p-1 rounded-lg border-[2px] cursor-pointer">
                                    <img className="w-[90px] h-[90px] object-cover rounded-lg" src="/q.jpg" alt="" />
                                </div>
                                <div onClick={() => setActiveImg(2)} style={{
                                    border: activeImg === 2 && '2px solid #16a34a'
                                }} className="border-2 w-[90px] p-1 border-[2px] rounded-lg cursor-pointer">
                                    <img className="w-[90px] h-[90px] object-cover rounded-lg" src="/q2.webp" alt="" />
                                </div>
                            </div>
                            <div className="max-w-[1000px] w-full">
                                <LightGallery
                                    speed={500}
                                    plugins={[lgThumbnail, lgFullscreen, lgZoom]}
                                    fullScreen={true}
                                >
                                    {activeImg === 1 && <a href="/q.jpg">
                                        <img className="h-[300px] w-[500px] object-cover" alt="img1" src="/q.jpg" />
                                    </a>}
                                    {activeImg === 2 && <a href="/q2.webp">
                                        <img width={600} className="h-[300px] w-[500px] object-cover" alt="img2" src="/q2.webp" />
                                    </a>}
                                </LightGallery>
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                <p>{t("Коротко о товаре")}</p>
                                <p>Бренд: <span className="text-primary text-[14px] font-bold">Premier</span></p>
                                <div className="flex items-end justify-between gap-1">
                                    <p className="text-[14px] text-ellipsis whitespace-nowrap">{t('Максимальная загрузка белья (кг)')}</p>
                                    <div className="border-b w-full h-[1px]"></div>
                                    <p className="text-[14px]">7</p>
                                </div>
                                <div className="flex items-end justify-between gap-1">
                                    <p className="text-[14px] text-ellipsis whitespace-nowrap">{t('Максимальная загрузка белья (кг)')}</p>
                                    <div className="border-b w-full h-[1px]"></div>
                                    <p className="text-[14px]">7</p>
                                </div>
                                <div className="flex items-end justify-between gap-1">
                                    <p className="text-[14px] text-ellipsis whitespace-nowrap">{t('Максимальная загрузка белья (кг)')}</p>
                                    <div className="border-b w-full h-[1px]"></div>
                                    <p className="text-[14px]">7</p>
                                </div>
                                <div className="flex items-end justify-between gap-1">
                                    <p className="text-[14px] text-ellipsis whitespace-nowrap">{t('Максимальная загрузка белья (кг)')}</p>
                                    <div className="border-b w-full h-[1px]"></div>
                                    <p className="text-[14px]">7</p>
                                </div>
                                <a href="#product-properties">Все характеристики</a>
                            </div>
                        </div>
                        <div>
                            <Tabs id="product-properties" defaultValue="account" className="w-full mt-12">
                                <TabsList className="grid w-[400px] grid-cols-2 ">
                                    <TabsTrigger value="account">{t('О товаре')}</TabsTrigger>
                                    <TabsTrigger value="password">{t('Характеристики')}</TabsTrigger>
                                </TabsList>
                                <TabsContent className="mt-8" value="account">
                                    Смартфон <strong>{productName}</strong> — модель в корпусе из пластика. Работа производится на базе ОС Android версии 13.0. Возможна установка двух карт формата nano-SIM. Восьмиядерный процессор UMS9230 от Unisoc с частотой 8х1,6 ГГц и оперативная память на 3 Гб не допускают задержек во время запуска приложений и переключения между ними. Хранение файлов осуществляется во встроенной памяти объемом 64 Гб, которую можно расширять посредством карты microSD/TF (1 Тб).
                                    <span className="!block mt-4">Устройство оборудовано сенсорным экраном типа LCD диагональю 6,6 дюйма разрешением 1612х720 пикселей. Максимальная частота обновления составляет 90 Гц. Смартфон поддерживает стандарты сотовой связи 2G, 3G, 4G. Быструю беспроводную связь с устройствами с целью передачи данных обеспечивает модуль Bluetooth версии 5.0, Wi-Fi гарантирует быстрый выход в Сеть.</span>
                                </TabsContent>
                                <TabsContent className="mt-8" value="password">
                                    <div className="w-full flex flex-col gap-3">
                                        <p>{t("Коротко о товаре")}</p>
                                        <p>Бренд: <span className="text-primary text-[14px] font-bold">Premier</span></p>
                                        <div className="flex items-end justify-between gap-1">
                                            <p className="text-[14px] text-ellipsis whitespace-nowrap">{t('Максимальная загрузка белья (кг)')}</p>
                                            <div className="border-b w-full h-[1px]"></div>
                                            <p className="text-[14px]">7</p>
                                        </div>
                                        <div className="flex items-end justify-between gap-1">
                                            <p className="text-[14px] text-ellipsis whitespace-nowrap">{t('Максимальная загрузка белья (кг)')}</p>
                                            <div className="border-b w-full h-[1px]"></div>
                                            <p className="text-[14px]">7</p>
                                        </div>
                                        <div className="flex items-end justify-between gap-1">
                                            <p className="text-[14px] text-ellipsis whitespace-nowrap">{t('Максимальная загрузка белья (кг)')}</p>
                                            <div className="border-b w-full h-[1px]"></div>
                                            <p className="text-[14px]">7</p>
                                        </div>
                                        <div className="flex items-end justify-between gap-1">
                                            <p className="text-[14px] text-ellipsis whitespace-nowrap">{t('Максимальная загрузка белья (кг)')}</p>
                                            <div className="border-b w-full h-[1px]"></div>
                                            <p className="text-[14px]">7</p>
                                        </div>
                                        <a href="#product-properties">Все характеристики</a>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                    <div>
                        <Card>
                            <CardContent className="py-4">
                                <p className="text-[18px] font-bold">{t('Цена товара')}</p>
                                <p className="text-[24px] text-primary mt-1 font-bold">{formatPrice(price)} {t('сум')}</p>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-full justify-between mt-4"
                                        >
                                            {value
                                                ? frameworks.find((framework) => framework.value === value)?.label
                                                : "Sotib olish turini tanlang..."}
                                            <ChevronsUpDown className="opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandList>
                                                <CommandEmpty>No framework found.</CommandEmpty>
                                                <CommandGroup>
                                                    {frameworks.map((framework) => (
                                                        <CommandItem
                                                            key={framework.value}
                                                            value={framework.value}
                                                            onSelect={(currentValue) => {
                                                                setValue(currentValue === value ? "" : currentValue)
                                                                setOpen(false)
                                                            }}
                                                        >
                                                            {framework.label}
                                                            <Check
                                                                className={cn(
                                                                    "ml-auto",
                                                                    value === framework.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <p className="font-bold text-md mt-3">{value === '9-month' ? `${formatPrice(price / 9).slice(0, 7)} ${t('сум')}` : ''}</p>
                                <p className="font-bold text-md mt-3">{value === '6-month' ? `${formatPrice(price / 6).slice(0, 7)} ${t('сум')}` : ''}</p>
                                <p className="font-bold text-md mt-3">{value === '12-month' ? `${formatPrice(price / 12).slice(0, 7)} ${t('сум')}` : ''}</p>
                                <div className="flex flex-col gap-2 mt-4">
                                    <Button>Добавлено в корзину</Button>
                                    <Button>Купить</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <p className="text-2xl font-semibold mt-8">Специально для вас</p>
                <div className="flex items-center gap-8 mt-8 mb-8">
                    {products.map((pr) => (
                        <ProductCard data={pr} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductSlug;