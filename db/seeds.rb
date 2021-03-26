5.times do
  handy_man = HandyMan.create(
    name: Faker::Name.name,
    title: Faker::Job.title,
    experience: Faker::TvShows::VentureBros.organization
  )
  3.times do
    service = Service.create(
      job: Faker::Job.field,
      description: Faker::Lorem.paragraph,
      price: Faker::Number.decimal(l_digits: 3),
      handy_man_id: handy_man.id
    )
    Comment.create(
      body: Faker::Lorem.paragraph,
      author: Faker::DcComics.hero,
      date: Faker::Date.birthday(min_age: 18, max_age: 65),
      service_id: service.id
    )
  end
end
puts 'Data has been seeded'