import React, { useState } from "react";
import { Box, Heading, Text, Button, Stack, Grid, Container, Image } from "@chakra-ui/react";

const Products = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const featuredProducts = products.slice(0, 6);

  const filteredProducts = selectedCategory ? products.filter((product) => product.category === selectedCategory) : featuredProducts;

  return (
    <Container maxW="container.lg" py={16}>
      <Stack direction="row" spacing={4} mb={8}>
        <Button onClick={() => handleCategorySelect("disposables")}>Disposables</Button>
        <Button onClick={() => handleCategorySelect("pods")}>Pods</Button>
        <Button onClick={() => handleCategorySelect("box mods")}>Box Mods</Button>
        <Button onClick={() => handleCategorySelect("juices")}>Juices</Button>
      </Stack>
      <Heading as="h2" size="xl" mb={8}>
        {selectedCategory || "Featured Products"}
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {filteredProducts.map((product) => {
          const brandImages = {
            "AL FAKHER": "https://www.canvape.com/cdn/shop/files/img_3449_1_1800x1800.jpg?v=1704910466",
            "BREEZE PRO": "https://vapemeet.ca/cdn/shop/products/RaspberryLemon_da6016df-1394-46d2-adfd-d120a90f5d3a.jpg?v=1707411077",
            ARCHER: "https://honeypotvapeshop.ca/cdn/shop/files/Vapmod-Archer-12000_Website-Banner_Mobile_1024x1024.png?v=1707072285",
            "DUMMY VAPES": "https://digitalimports.ca/cdn/shop/collections/VfE7xVdA.jpg?v=1696009784",
            "BREEZE PRIME": "https://www.primevape.ca/cdn/shop/files/BreezePrime6000-DoubleApple.png?v=1702494412",
            "BREEZE ELITE": "https://eyzssdmhyfg.exactdn.com/wp-content/uploads/2023/10/breeze-elite-punch-ice-canada.jpg?strip=all&lossy=1&ssl=1",
            "Z-PODS": "https://www.majesticvapes.ca/wp-content/uploads/bb-plugin/cache/b3b317d1d4f01405bbe4ad3e4ec9734a668cff00-600x600-square.jpg",
            STLTH: "https://stlthvape.com/cdn/shop/products/STLTH-TYPE-C-Vape-Device-Canada-Black-Metal.png?v=1673361510&width=1920",
            "STLTH TITAN": "https://fatpanda.ca/cdn/shop/files/STLTH-TITAN-DISPOSABLE-VAPE-PUNCH-ICE_700x700.jpg?v=1708548690",
            "STLTH 8K": "https://res.cloudinary.com/www180smokeca/image/upload/c_lpad,dpr_2.0,f_auto,g_auto:subject,q_auto/v1/media/catalog/product/s/t/stlth_8k_pro_0004s_0009_ice_mint.jpg",
            HQD: "https://www.libertyvape.ca/cdn/shop/files/hqd-cuvie-slick-pro-disposable-vape-7000-puffs-16ml-40348531589359_large.jpg?v=1701147126",
            ELFBAR: "https://res.cloudinary.com/www180smokeca/image/upload/c_lpad,dpr_2.0,f_auto,g_auto:subject,q_auto/v1/media/catalog/product/e/l/elfbar_bc10000_disposable_vape_blueberry_mint.jpg",
            "ICE WAVE": "https://www.majesticvapes.ca/wp-content/uploads/bb-plugin/cache/IW8500-peach-ice-300x300-1-square.jpg",
            GENIE: "https://6ixvape.ca/cdn/shop/products/STRAWBERRYMINT_Genieairmax-disposable-qualityvapes-london-canada_1024x1024_2x_f412b771-4d72-41c3-9c7d-d3ffe3c4c027.webp?v=1672788483",
            "POP HIT": "https://www.quitters.ca/cdn/shop/files/MIXFRUITBLAST_800x.jpg?v=1688672862",
            "FLAVOUR BEAST": "https://www.vapourscanada.com/cdn/shop/files/FBBeastModeWeekendWat_1024x1024@2x.png?v=1710252794",
            "FLAVOUR BEAST - BEAST MODE": "https://www.vapourscanada.com/cdn/shop/files/FBBeastModeWeekendWat_1024x1024@2x.png?v=1710252794",
            "FLAVOUR BEAST - LEVEL X BOOST": "https://www.vape360.ca/cdn/shop/files/Super-Sour-Blueberry-Iced-Flavour-Beast-Level-X-Boost-Pods_-Level-X-Vape_-Vape360-Canada_1200x1200.jpg?v=1712140239",
            "FLAVOUR BEAST - LEVEL X BOOST DEVICE": "https://www.majesticvapes.ca/wp-content/uploads/bb-plugin/cache/levelx_battery-850_dec2023_render-fam_1_1_1024x-square.webp",
          };
          const productImage = brandImages[product.brand] || "";

          return (
            <Box key={product.name} borderWidth={1} borderRadius="lg" p={4}>
              <Image src={productImage} alt={`${product.brand} product`} mb={4} borderRadius="md" />
              <Heading as="h3" size="md" mb={2}>
                {product.name}
              </Heading>
              <Text mb={2}>{product.brand}</Text>
              <Stack direction="row" align="center">
                <Text fontWeight="bold">{product.price}</Text>
                <Button colorScheme="blue" size="sm" ml="auto">
                  Add to Cart
                </Button>
              </Stack>
            </Box>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;
