from django.contrib import admin
from django.http import HttpResponse, JsonResponse, HttpResponseNotFound, FileResponse
from django.urls import include, path, re_path
from django.views.generic import RedirectView
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
import os


def favicon_view(request):
    favicon_path = os.path.join(settings.BASE_DIR, 'static', 'favicon.ico')
    return FileResponse(open(favicon_path, 'rb'), content_type='image/x-icon')


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
    # Favicon handling
    path('favicon.ico', favicon_view, name='favicon'),
]

# Serve static files in development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
else:
    # In production, serve static files through WhiteNoise
    urlpatterns += [
        re_path(r'^static/(?P<path>.*)$', serve, {
            'document_root': settings.STATIC_ROOT,
            'show_indexes': False,
        }),
    ]
