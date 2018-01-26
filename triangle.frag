#version 330

in vec3 VertColor;
in vec2 TextCoord;

uniform sampler2D tex;
uniform sampler2D tex2;

out vec4 color;


void main()
{
	color = mix(texture(tex, TextCoord), texture(tex2, TextCoord), 0.3) * vec4(VertColor, 1.0f);make
}