"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";

function Header1() {
    const navigationItems = [
        {
            title: "Início",
            href: "#home",
            description: "",
        },
        {
            title: "Serviços",
            description: "Soluções completas em energia solar para sua casa ou empresa.",
            items: [
                {
                    title: "Sistemas Residenciais",
                    href: "#residencial",
                },
                {
                    title: "Sistemas Comerciais",
                    href: "#comercial",
                },
                {
                    title: "Projetos Personalizados",
                    href: "#projetos",
                },
                {
                    title: "Manutenção",
                    href: "#manutencao",
                },
            ],
        },
        {
            title: "Empresa",
            description: "Conheça nossa empresa e nossa missão em energia solar.",
            items: [
                {
                    title: "Sobre Nós",
                    href: "#sobre",
                },
                {
                    title: "Projetos Realizados",
                    href: "#projetos",
                },
                {
                    title: "Depoimentos",
                    href: "#depoimentos",
                },
                {
                    title: "Contato",
                    href: "#contato",
                },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);

    const handleNavClick = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = href;
        }
        setOpen(false);
    };

    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background/95 backdrop-blur-sm border-b">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink>
                                                <Button 
                                                    variant="ghost" 
                                                    onClick={() => handleNavClick(item.href)}
                                                >
                                                    {item.title}
                                                </Button>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button 
                                                            size="sm" 
                                                            className="mt-10"
                                                            onClick={() => handleNavClick('#contato')}
                                                        >
                                                            Solicitar Orçamento
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded cursor-pointer"
                                                                onClick={() => handleNavClick(subItem.href)}
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <p className="font-semibold text-lg">Solaris Spark</p>
                </div>
                <div className="flex justify-end w-full gap-4">
                    <Button 
                        variant="ghost" 
                        className="hidden md:inline"
                        onClick={() => handleNavClick('#contato')}
                    >
                        Simulação Gratuita
                    </Button>
                    <div className="border-r hidden md:inline"></div>
                    <Button 
                        variant="outline"
                        onClick={() => window.open('https://wa.me/554535230217?text=Olá! Gostaria de saber mais sobre energia solar.', '_blank')}
                    >
                        WhatsApp
                    </Button>
                    <Button onClick={() => handleNavClick('#contato')}>
                        Orçamento
                    </Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <button
                                                onClick={() => handleNavClick(item.href)}
                                                className="flex justify-between items-center text-left"
                                            >
                                                <span className="text-lg">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                            </button>
                                        ) : (
                                            <p className="text-lg">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <button
                                                    key={subItem.title}
                                                    onClick={() => handleNavClick(subItem.href)}
                                                    className="flex justify-between items-center text-left"
                                                >
                                                    <span className="text-muted-foreground">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1" />
                                                </button>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };