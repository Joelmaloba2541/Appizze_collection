from django.db import models


class CollectionItem(models.Model):
    title = models.CharField(max_length=120)
    category = models.CharField(max_length=60)
    description = models.TextField()
    image_url = models.URLField()
    featured = models.BooleanField(default=False)
    created_at = models.DateField()

    class Meta:
        ordering = ["-created_at", "title"]

    def __str__(self) -> str:
        return self.title


class Milestone(models.Model):
    title = models.CharField(max_length=120)
    year = models.PositiveIntegerField()
    summary = models.TextField()
    mood = models.CharField(max_length=40)

    class Meta:
        ordering = ["-year", "title"]

    def __str__(self) -> str:
        return f"{self.title} ({self.year})"


class Testimonial(models.Model):
    name = models.CharField(max_length=80)
    role = models.CharField(max_length=120)
    message = models.TextField()
    spotlight = models.BooleanField(default=False)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return self.name
