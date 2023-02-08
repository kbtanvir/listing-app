import {
  Box,
  Center,
  CircularProgress,
  Grid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { APIResponse } from "../../../lib/types/network";
import { categoryService } from "../logic/category.service";
import { categoryStore, useCategoryStore } from "../logic/category.store";

export default function RootView() {
  const { list } = useCategoryStore();
  // QUERIES
  const router = useRouter();

  const categoryQuery = useQuery<APIResponse>(["category-list"], () => {
    categoryStore.setQueryOptions(options => ({
      ...options,
      startAfter: null,
      hasMore: true,
    }));
    return categoryService.getAll();
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return;
      }

      categoryService.getAll();
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  if (categoryQuery.isFetching) {
    return (
      <Center minH="70vh">
        <CircularProgress isIndeterminate color="green.300" />
      </Center>
    );
  }

  if (categoryQuery.isError) {
    return <div>Error...</div>;
  }

  return (
    <VStack
      w="full"
      px={{
        base: 0,
        md: 4,
      }}
    >
      <Grid
        templateColumns={[
          "repeat(auto-fit, minmax(100px, 1fr))",
          "repeat(auto-fit, minmax(180px, 1fr))",
        ]}
        gap={6}
        w="full"
      >
        {list.map(item => (
          <VStack
            cursor={"pointer"}
            key={item.id}
            onClick={() => {
              router.push(`/categories/${item.id}?name=${item.name}`);
            }}
          >
            {/* <Box position="relative" w={"full"} h={[100, 200, 250]}>
              <Image
                src={item.thumbnail.url}
                alt="image"
                layout="fill"
                objectFit={"contain"}
                placeholder="blur"
                blurDataURL={item.thumbnail.url}
              />
            </Box> */}

            <Text fontSize={["sm", "md"]}>{item.name}</Text>
          </VStack>
        ))}
      </Grid>
    </VStack>
  );
}
