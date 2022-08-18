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

# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
