# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

User.destroy_all
Category.destroy_all
Favorite.destroy_all
Post.destroy_all

puts '🌱  Seeding users'
10.times do |user|
    User.create(f_name: Faker::Name.first_name, l_name: Faker::Name.last_name, bio: Faker::GreekPhilosophers.quote, username: Faker::Lorem.words, password: Faker::Lorem.words)
end
puts '🌱  Seeding done'


puts '🌱  Seeding categories'
history = Category.create(topic: "History")
science = Category.create(topic: "Science")
literature = Category.create(topic: "Literature")
popculture = Category.create(topic: "Pop Culture")
sports = Category.create(topic: "Sports")
music = Category.create(topic: "Music")
film = Category.create(topic: "TV and Film")
myth = Category.create(topic: "Mythology")
food = Category.create(topic: "Food and Drink")
geo = Category.create(topic: "Geography")

# cats = Category.create([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}])
# iterate through each category to fix the dropdown menu problem

puts '🌱  Seeding done'



# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
