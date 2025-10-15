from rest_framework import generics

from .models import CollectionItem, Milestone, Testimonial
from .serializers import CollectionItemSerializer, MilestoneSerializer, TestimonialSerializer


class FeaturedCollectionList(generics.ListAPIView):
    queryset = CollectionItem.objects.filter(featured=True)
    serializer_class = CollectionItemSerializer


class CollectionList(generics.ListAPIView):
    queryset = CollectionItem.objects.all()
    serializer_class = CollectionItemSerializer


class MilestoneList(generics.ListAPIView):
    queryset = Milestone.objects.all()
    serializer_class = MilestoneSerializer


class TestimonialList(generics.ListAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer
