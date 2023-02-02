import { render } from "@testing-library/react";
import "@testing-library/jest-dom"
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import Header from "../components/Header";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import ProductProvider from "../context/ProductsContext";
import CartProvider from "../context/CartContext";
import store from "../store";
import Footer from "../components/Footer";

const productsMock = [
    {
        id: 1,
        name: "Iphone 11 128 GB",
        brand: "Apple",
        description:
            "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
        photo:
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
        price: "5000.00",
        createdAt: new Date("2023-01-23T18:17:04.771Z"),
        updatedAt: new Date("2023-01-23T18:17:04.771Z"),
    },
    {
        id: 2,
        name: "AirPods",
        brand: "Apple",
        description:
            "Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
        photo:
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
        price: "1200.00",
        createdAt: new Date("2023-01-23T18:17:04.771Z"),
        updatedAt: new Date("2023-01-23T18:17:04.771Z"),
    },
    {
        id: 3,
        name: "Macbook Air",
        brand: "Apple",
        description:
            "Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.",
        photo:
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp",
        price: "8200.00",
        createdAt: new Date("2023-01-23T18:17:04.771Z"),
        updatedAt: new Date("2023-01-23T18:17:04.771Z"),
    },
    {
        id: 4,
        name: "iPhone 12 64 GB",
        brand: "Apple",
        description:
            "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
        photo:
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone12x64.webp",
        price: "6500.00",
        createdAt: new Date("2023-01-23T18:17:04.771Z"),
        updatedAt: new Date("2023-01-23T18:17:04.771Z"),
    },
    {
        id: 5,
        name: "Apple Watch Series 7",
        brand: "Apple",
        description:
            "O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.",
        photo:
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp",
        price: "3200.00",
        createdAt: new Date("2023-01-23T18:17:04.771Z"),
        updatedAt: new Date("2023-01-23T18:17:04.771Z"),
    },
    {
        id: 6,
        name: "iPad",
        brand: "Apple",
        description:
            "iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.",
        photo:
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp",
        price: "4200.00",
        createdAt: new Date("2023-01-23T18:17:04.771Z"),
        updatedAt: new Date("2023-01-23T18:17:04.771Z"),
    },
    {
        id: 7,
        name: "Headset Cloud Revolver",
        brand: "HyperX",
        description:
            "A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.",
        photo:
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
        price: "1000.00",
        createdAt: new Date("2023-01-23T18:17:04.771Z"),
        updatedAt: new Date("2023-01-23T18:17:04.771Z"),
    },
    {
        id: 8,
        name: "Headset Cloud Stinger",
        brand: "HyperX",
        description:
            "O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.",
        photo:
            "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
        price: "600.00",
        createdAt: new Date("2023-01-23T18:17:04.771Z"),
        updatedAt: new Date("2023-01-23T18:17:04.771Z"),
    },
];

describe("Register component", () => {
    const user = userEvent.setup();

    it("testing Header component", async () => {
        const { getByText } = render(
            <Header />
        );
        expect(getByText("MKS")).toBeInTheDocument();
        expect(getByText("Sistemas")).toBeInTheDocument();

    });

    it("testing open cart button", async () => {
        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <ProductProvider>
                    <CartProvider>
                        <Header />
                        <Cart />
                    </CartProvider>
                </ProductProvider>
            </Provider>
        );
        const openCart = getByTestId("cart");
        await user.click(openCart);
        expect(getByText("Finalizar Compra")).toBeInTheDocument();
    });

    it("testing products list", async () => {
        const { getByText } = render(
            <ProductCard product={productsMock} />
        );
        expect(getByText("COMPRAR")).toBeInTheDocument();
    });

    it("testing add to cart button", async () => {
        const { getByText, getByTestId } = render(
            <Provider store={store}>
                <ProductProvider>
                    <CartProvider>
                        <Header />
                        <Cart />
                        <ProductCard product={productsMock} />
                    </CartProvider>
                </ProductProvider>
            </Provider>
        );
        const buyProduct = getByTestId("buy");
        await user.click(buyProduct);
        const openCart = getByTestId("cart");
        await user.click(openCart);
        expect(getByText("+")).toBeInTheDocument();
        expect(getByText("-")).toBeInTheDocument();
    });

    it("testing footer component", async () => {
        const { getByText } = render(
            <Footer />
        );
        expect(getByText("MKS Sistemas © Todos os direitos reservados")).toBeInTheDocument();
    });
});