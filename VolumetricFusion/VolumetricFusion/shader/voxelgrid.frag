#version 330 core
out vec4 FragColor;

in vec4 fColor;


void main()
{
//    FragColor = vec4(vec3(1.0f, 1.0f, 1.0f) - aColor, 1.0f);

//    if(aColor.z == 1.0f) {
//        FragColor = vec4(aColor, 0.0f);
//    }
    FragColor = fColor;
}
