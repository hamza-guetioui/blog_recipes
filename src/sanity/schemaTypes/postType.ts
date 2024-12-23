import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: { type: "author" },
    }),

    defineField({
      name: "categories",
      type: "array",
      title: "Categories",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "collections",
      type: "array",
      title: "Collections",
      of: [
        defineArrayMember({ type: "reference", to: { type: "collection" } }),
      ],
    }),

    defineField({
      name: "tranding",
      type: "boolean",
      title: "isTranding",
      initialValue: false,
    }),
    defineField({
      name: "suggesting",
      type: "boolean",
      title: "isSuggesting",
      initialValue: false,
    }),

    defineField({
      name: "body",
      type: "blockContent",
      title: "Body Content",
    }),

    defineField({
      name: "details",
      type: "object",
      title: "Details",
      fields: [
        {
          name: "prepTime",
          type: "string",
          title: "Prep Time",
        },
        {
          name: "cookTime",
          type: "string",
          title: "Cook Time",
        },
        {
          name: "difficulty",
          type: "string",
          title: "Difficulty",
          options: {
            list: [
              { title: "Easy", value: "easy" },
              { title: "Medium", value: "medium" },
              { title: "Hard", value: "hard" },
            ],
          },
        },
        {
          name: "yield",
          type: "string",
          title: "Yield",
        },
        {
          name: "dietary",
          type: "string",
          title: "Dietary",
          options: {
            list: [
              { title: "Vegetarian", value: "vegetarian" },
              { title: "Vegan", value: "vegan" },
              { title: "Gluten Free", value: "glutenFree" },
              { title: "Dairy Free", value: "dairyFree" },
              { title: "Nut Free", value: "nutFree" },
              { title: "Paleo", value: "paleo" },
            ],
          },
        },
        {
          name: "ingredients",
          type: "array",
          title: "Ingredients",
          of: [{ type: "string" }],
        },
        {
          name: "steps",
          type: "array",
          title: "Steps",
          of: [{ type: "string" }],
        },
        {
          name: "notes",
          type: "array",
          title: "Notes",
          of: [{ type: "string" }],
        },
        {
          name: "tools",
          type: "array",
          title: "Tools",
          of: [{ type: "string" }],
        },
        {
          name: "allergyInformation",
          type: "array",
          title: "Allergy Information",
          of: [{ type: "string" }],
        },
        {
          name: "nutritionInformation",
          type: "array",
          title: "Nutrition Information",
          of: [{ type: "string" }],
        },
      ],
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
