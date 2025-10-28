from django.contrib import admin
from django.http import HttpResponse, JsonResponse, HttpResponseNotFound
from django.urls import include, path
from django.views.generic import RedirectView
from django.conf import settings
from django.conf.urls.static import static


def favicon_view(request):
    # Return a transparent 1x1 pixel GIF
    gif = (
        b'\x47\x49\x46\x38\x39\x61\x01\x00\x01\x00\x80\x00\x00'
        b'\x00\x00\x00\xFF\xFF\xFF\x21\xF9\x04\x01\x00\x00\x00'
        b'\x00\x2C\x00\x00\x00\x00\x01\x00\x01\x00\x00\x02'
        b'\x02\x44\x01\x00\x3B'
    )
    return HttpResponse(gif, content_type='image/gif')


def api_root(request):
    return JsonResponse({
        "message": "Welcome to the Appizze Collection API",
        "endpoints": {
            "api": {
                "items": "/api/items/",
                "featured": "/api/featured/",
                "milestones": "/api/milestones/",
                "testimonials": "/api/testimonials/"
            },
            "admin": "/admin/"
        }
    })


urlpatterns = [
    path("", api_root, name="api-root"),
    path("admin/", admin.site.urls),
    path("api/", include("collection.urls")),
    # Handle favicon.ico requests
    path('favicon.ico', favicon_view, name='favicon'),
    # Redirect any other favicon requests
    path('favicon.ico/', RedirectView.as_view(url='/favicon.ico', permanent=True)),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
