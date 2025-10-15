from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Ensure default admin user exists"

    def handle(self, *args, **options):
        User = get_user_model()
        username = "admin"
        email = "admin@gmail.com"
        password = "admin"

        user, created = User.objects.update_or_create(
            username=username,
            defaults={
                "email": email,
                "is_staff": True,
                "is_superuser": True,
            },
        )
        user.set_password(password)
        user.save(update_fields=["password"])

        if created:
            self.stdout.write(self.style.SUCCESS("Created default admin user."))
        else:
            self.stdout.write("Updated default admin user password.")
