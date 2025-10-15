from django.contrib import admin

from .models import CollectionItem, Milestone, Testimonial


@admin.register(CollectionItem)
class CollectionItemAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "featured", "created_at")
    list_filter = ("category", "featured")
    search_fields = ("title", "description", "category")


@admin.register(Milestone)
class MilestoneAdmin(admin.ModelAdmin):
    list_display = ("title", "year", "mood")
    list_filter = ("year", "mood")
    search_fields = ("title", "summary")


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("name", "role", "spotlight")
    list_filter = ("spotlight",)
    search_fields = ("name", "role", "message")
