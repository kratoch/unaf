from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from django.urls import reverse
from user.models import Person
from PIL import Image
from os import remove
from django.core.cache import cache


# Create your views here.

@login_required
def profile_img_upload(request):
    global person
    try:
        person = Person.objects.get(user=request.user)
    except Exception as e:
        print(e)
    for img in request.FILES.getlist("images"):
        img = Image.open(img).convert('RGB')
        img = img.resize((400, 400), Image.ANTIALIAS)
        try:
            if person:
                img.save(
                    'Unaf/media/profiles_images_persons/' + str(person.id) + '_' + str(person.changeImage + 1)
                    + '.jpg')
                try:
                    remove(
                        'Unaf/media/profiles_images_persons/' + str(person.id) + '_' + str(person.changeImage)
                        + '.jpg')
                except Exception as e:
                    print(e)
                person.changeImage += 1
                person.profileImage = 'profiles_images_persons/' + str(person.id) + '_' + \
                                      str(person.changeImage) + '.jpg'
                person.save()
        except Exception as e:
            print(e)
    try:
        cache.clear()
    except Exception as e:
        print(e)
    return redirect(reverse("core:menu") + "#profile")
