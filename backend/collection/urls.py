from django.urls import path

from .views import CollectionList, FeaturedCollectionList, MilestoneList, TestimonialList

urlpatterns = [
    path("featured/", FeaturedCollectionList.as_view(), name="featured-collection"),
    path("items/", CollectionList.as_view(), name="collection-items"),
    path("milestones/", MilestoneList.as_view(), name="milestones"),
    path("testimonials/", TestimonialList.as_view(), name="testimonials"),
]
