from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="CollectionItem",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=120)),
                ("category", models.CharField(max_length=60)),
                ("description", models.TextField()),
                ("image_url", models.URLField()),
                ("featured", models.BooleanField(default=False)),
                ("created_at", models.DateField()),
            ],
            options={
                "ordering": ["-created_at", "title"],
            },
        ),
        migrations.CreateModel(
            name="Milestone",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=120)),
                ("year", models.PositiveIntegerField()),
                ("summary", models.TextField()),
                ("mood", models.CharField(max_length=40)),
            ],
            options={
                "ordering": ["-year", "title"],
            },
        ),
        migrations.CreateModel(
            name="Testimonial",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=80)),
                ("role", models.CharField(max_length=120)),
                ("message", models.TextField()),
                ("spotlight", models.BooleanField(default=False)),
            ],
            options={
                "ordering": ["name"],
            },
        ),
    ]
