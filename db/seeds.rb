# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

User.destroy_all
Category.destroy_all
Favorite.destroy_all
Post.destroy_all

10.times do |user|
    User.create(f_name: Faker::Name.first_name, l_name: Faker::Name.last_name, bio: Faker::GreekPhilosophers.quote, username: Faker::Lorem.words, password: Faker::Lorem.words)
end

history = Category.create(topic: "History")
science = Category.create(topic: "Science")
sports = Category.create(topic: "Sports")
music = Category.create(topic: "Music")
tv_and_film = Category.create(topic: "TV and Film")
pop_culture = Category.create(topic: "Pop Culture")
myth = Category.create(topic: "Mythology")
geography = Category.create(topic: "Geography")
lit = Category.create(topic: "Literature")
food_and_drink = Category.create(topic: "Food and Drink")

# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
