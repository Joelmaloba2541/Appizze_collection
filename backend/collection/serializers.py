from rest_framework import serializers

from .models import CollectionItem, Milestone, Testimonial


class CollectionItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollectionItem
        fields = [
            "id",
            "title",
            "category",
            "description",
            "image_url",
            "featured",
            "created_at",
        ]


class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestone
        fields = ["id", "title", "year", "summary", "mood"]


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ["id", "name", "role", "message", "spotlight"]
