from faker import Faker
from faker_food import FoodProvider
fake = Faker()
fake.add_provider(FoodProvider)

fake.dish()
fake.dish_description()
fake.ethnic_category()
fake.fruit()
fake.ingredient()
fake.measurement()
fake.metric_measurement()
fake.measurement_size()
fake.spice()
fake.sushi()
fake.vegetable()