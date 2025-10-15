from django.contrib import admin
from django.http import HttpResponse
from django.urls import include, path


def empty_favicon(_request):
    return HttpResponse(status=204)


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("collection.urls")),
    path("favicon.ico", empty_favicon),
]
