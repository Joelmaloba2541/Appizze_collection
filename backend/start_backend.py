import os
from pathlib import Path

import django
from django.core.management import call_command


def main() -> None:
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "appizzo_backend.settings")
    os.environ.setdefault("DJANGO_ALLOW_ASYNC_UNSAFE", "true")
    os.chdir(Path(__file__).resolve().parent)
    django.setup()
    call_command("migrate", interactive=False)
    call_command("runserver", "0.0.0.0:8000")


if __name__ == "__main__":
    main()
