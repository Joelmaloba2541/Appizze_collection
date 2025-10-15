from datetime import date

from django.contrib.auth import get_user_model
from django.db.models.signals import post_migrate
from django.dispatch import receiver

from .models import CollectionItem, Milestone, Testimonial


@receiver(post_migrate)
def seed_initial_data(sender, **kwargs):
    if sender.label != "collection":
        return

    User = get_user_model()
    admin_user, _ = User.objects.update_or_create(
        username="admin",
        defaults={
            "email": "admin@gmail.com",
            "is_staff": True,
            "is_superuser": True,
        },
    )
    admin_user.set_password("admin")
    admin_user.save(update_fields=["password"])

    featured_items = [
        {
            "title": "Celestial Bloom Jacket",
            "category": "Outerwear",
            "description": "Hand-painted constellations dancing across iridescent silk, inspired by midnight rooftop conversations.",
            "image_url": "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
            "featured": True,
            "created_at": date(2024, 6, 3),
        },
        {
            "title": "Wavelength Echo Tote",
            "category": "Accessories",
            "description": "A tote that catches city light trails, woven with reflective threads that shift hue under motion.",
            "image_url": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "featured": True,
            "created_at": date(2023, 11, 21),
        },
    ]
    for item in featured_items:
        CollectionItem.objects.update_or_create(
            title=item["title"],
            defaults=item,
        )

    collection_items = [
        {
            "title": "Chromatic Reverie Scarf",
            "category": "Accessories",
            "description": "Gradient-dyed bamboo silk scarf shifting from dusk mauve to sunrise tangerine.",
            "image_url": "https://images.unsplash.com/photo-1514996937319-344454492b37",
            "featured": False,
            "created_at": date(2022, 10, 14),
        },
        {
            "title": "Nebula Sound Hoodie",
            "category": "Outerwear",
            "description": "Noise-reactive fiber hoodie that pulses gentle luminescence with street rhythm.",
            "image_url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
            "featured": False,
            "created_at": date(2024, 2, 8),
        },
    ]
    for item in collection_items:
        CollectionItem.objects.update_or_create(
            title=item["title"],
            defaults=item,
        )

    milestones = [
        {
            "title": "First Capsule Launch",
            "year": 2021,
            "summary": "Released the debut capsule at a rooftop runway, blending augmented reality backdrops with sustainable textiles.",
            "mood": "Radiant",
        },
        {
            "title": "Immersive Gallery Residency",
            "year": 2023,
            "summary": "Hosted a pop-up gallery where visitors could remix garments through gestural projections.",
            "mood": "Electric",
        },
    ]
    for milestone in milestones:
        Milestone.objects.update_or_create(title=milestone["title"], defaults=milestone)

    testimonials = [
        {
            "name": "Leila Rowe",
            "role": "Creative Technologist",
            "message": "Appizzo taught me that garments can hold memory and motion—each piece is a living story arc.",
            "spotlight": True,
        },
        {
            "name": "Rafael Diaz",
            "role": "Photographer",
            "message": "Their collection is impossible to photograph without smiling; light bends with their intuition.",
            "spotlight": False,
        },
    ]
    for testimonial in testimonials:
        Testimonial.objects.update_or_create(
            name=testimonial["name"],
            defaults=testimonial,
        )
