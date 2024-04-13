'use client'

import Filter from "@/components/Filter";
import Navigation from "@/components/Navigation";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import Card from "@/components/Card";

const Products = () => {
  return (
    <>
      <Navigation path="Products" />
      <section className="responsive-layout mt-6 flex gap-4">
        <Filter />
        <main className="grow">
          <p className="font-semibold">Applied Filters:</p>
          <div className="w-full flex flex-wrap gap-2 mt-4">
            <Tag
              borderRadius="full"
              variant="outline"
              colorScheme="gray"
              size="lg"
            >
              <TagLabel className="text-black">Green</TagLabel>
              <TagCloseButton />
            </Tag>
            <Tag
              borderRadius="full"
              variant="outline"
              colorScheme="gray"
              size="lg"
            >
              <TagLabel className="text-black">Filter 2</TagLabel>
              <TagCloseButton />
            </Tag>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p>Showing x-y of z results</p>
            <Select
              onValueChange={e => {
                alert(e);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="SORT BY" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex justify-center">
              <Card productName="Light novel2" isInStock={true} price={12.34} />
            </div>
            <div className="flex justify-center">
              <Card productName="Light novel2" isInStock={true} price={12.34} />
            </div>
            <div className="flex justify-center">
              <Card productName="Light novel2" isInStock={true} price={12.34} />
            </div>
            <div className="flex justify-center">
              <Card productName="Light novel2" isInStock={true} price={12.34} />
            </div>
            <div className="flex justify-center">
              <Card productName="Light novel2" isInStock={true} price={12.34} />
            </div>
            <div className="flex justify-center">
              <Card productName="Light novel2" isInStock={true} price={12.34} />
            </div>
            <div className="flex justify-center">
              <Card productName="Light novel2" isInStock={true} price={12.34} />
            </div>
            <div className="flex justify-center">
              <Card productName="Light novel2" isInStock={true} price={12.34} />
            </div>
            <div className="flex justify-center">
              <Card productName="Light novel2" isInStock={true} price={12.34} />
            </div>
            <div className="flex justify-center">
              <Card productName="Light novel2" isInStock={true} price={12.34} />
            </div>
            <div className="flex justify-center">
              <Card productName="Light novel2" isInStock={true} price={12.34} />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Products;
