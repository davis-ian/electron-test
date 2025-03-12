/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex("todos").del();
  await knex("todos").insert([
    { title: "Test Todo", description: "This is a test todo" },
  ]);
};
