"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";

const ReturnBreadcrumb = () => {
  const searchParams = useSearchParams();
  const categories = searchParams.get("categories");
  const listCategories = categories?.split(",");
  return <Breadcrumb categories={listCategories} />;
};

export default ReturnBreadcrumb;
