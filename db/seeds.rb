# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

User.destroy_all
Category.destroy_all
Favorite.destroy_all
Post.destroy_all

10.times do |user|
    User.create!(f_name: Faker::Name.first_name, l_name: Faker::Name.last_name, bio: Faker::GreekPhilosophers.quote, username: Faker::Lorem.words, password: Faker::Lorem.words)
end

u1 = User.create!(f_name: Faker::Name.first_name, l_name: Faker::Name.last_name, bio: Faker::GreekPhilosophers.quote, username: Faker::Lorem.words, password: Faker::Lorem.words)

history = Category.create!(topic: "History")
science = Category.create!(topic: "Science")
sports = Category.create!(topic: "Sports")
music = Category.create!(topic: "Music")
tv_and_film = Category.create!(topic: "TV and Film")
pop_culture = Category.create!(topic: "Pop Culture")
myth = Category.create!(topic: "Mythology")
geography = Category.create!(topic: "Geography")
lit = Category.create!(topic: "Literature")
food_and_drink = Category.create!(topic: "Food and Drink")


# Post seeds
# f1 = Post.create!(user_id: 37, category_id: 31, fact: "Hephaestus is the Greek god of sculpture.")
# f2 = Post.create!(user_id: 32, category_id: 34, fact: "John Legend has 10 Grammys.")
# f3 = Post.create!(user_id: 39, category_id: 38, fact: "Suriname is the smallest sovereign state in South America.")
# f4 = Post.create!(user_id: 33, category_id: 35, fact: "Katniss Everdeen comes from the Twelfth District in Panem.")
# f5 = Post.create!(user_id: 33, category_id: 39, fact: "Rhyme and Reason are the adoptive daughters of the King of Wisdom in The Phantom Tollbooth.")
# f6 = Post.create!(user_id: 34, category_id: 31, fact: "The Code of Hammurabi is the earliest known system of laws.")
# f7 = Post.create!(user_id: 33, category_id: 31, fact: "Australia was settled by Britain as a prison colony in 1788.")
# f8 = Post.create!(user_id: 33, category_id: 37, fact: "The thunderbird is a legendary creature  from Native American tradition.")
# f9 = Post.create!(user_id: 33, category_id: 40, fact: "Soft-serve ice cream involves increasing the amount of air.")
# f10 = Post.create!(user_id: 37, category_id: 32, fact: "Alexander Fleming discovered penicilin.")
# f11 = Post.create!(user_id: 37, category_id: 35, fact: "Tiger Woods was 21 when he won the Masters.")
# f12 = Post.create!(user_id: 37, category_id: 36, fact: "Walt Disney created Oswald the Lucky Rabbit.")

# without the user_id and category_id
# f1 = Post.create!(fact: "Hephaestus is the Greek god of sculpture.")
# f2 = Post.create!(fact: "John Legend has 10 Grammys.")
# f3 = Post.create!(fact: "Suriname is the smallest sovereign state in South America.")
# f4 = Post.create!(fact: "Katniss Everdeen comes from the Twelfth District in Panem.")
# f5 = Post.create!(fact: "Rhyme and Reason are the adoptive daughters of the King of Wisdom in The Phantom Tollbooth.")
# f6 = Post.create!(fact: "The Code of Hammurabi is the earliest known system of laws.")
# f7 = Post.create!(fact: "Australia was settled by Britain as a prison colony in 1788.")
# f8 = Post.create!(fact: "The thunderbird is a legendary creature  from Native American tradition.")
# f9 = Post.create!(fact: "Soft-serve ice cream involves increasing the amount of air.")
# f10 = Post.create!(fact: "Alexander Fleming discovered penicilin.")
# f11 = Post.create!(fact: "Tiger Woods was 21 when he won the Masters.")
# f12 = Post.create!(fact: "Walt Disney created Oswald the Lucky Rabbit.")

# Examples:
#
#   movies = Movie.create!([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create!(name: "Luke", movie: movies.first)
