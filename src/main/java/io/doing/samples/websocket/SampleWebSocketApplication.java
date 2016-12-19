package io.doing.samples.websocket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.convert.converter.Converter;

@SpringBootApplication
public class SampleWebSocketApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(SampleWebSocketApplication.class, args);
	}
}
