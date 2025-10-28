from django.contrib import admin
from django.http import HttpResponse, JsonResponse, HttpResponseNotFound
from django.urls import include, path, re_path
from django.views.generic import RedirectView
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from django.contrib.staticfiles.views import serve as static_serve
import os


def favicon_redirect(request):
    return RedirectView.as_view(url='/static/images/favicon.ico', permanent=True)(request)


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


def get_favicon(request):
    return serve(request, 'images/favicon.ico', document_root=settings.STATIC_ROOT)

urlpatterns = [
    path("", api_root, name="api-root"),
    path("admin/", admin.site.urls),
    path("api/", include("collection.urls")),
    # Favicon handling
    path('favicon.ico', favicon_redirect, name='favicon'),
    re_path(r'^favicon\.ico$', favicon_redirect),
    re_path(r'^static/(?P<path>.*)$', static_serve, {'document_root': settings.STATIC_ROOT}),
]

# Serve static files in development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
