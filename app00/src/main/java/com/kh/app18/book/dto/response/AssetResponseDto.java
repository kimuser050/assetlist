package com.kh.app18.book.dto.response;

import com.kh.app18.book.entity.AssetEntity;
import lombok.*;

import java.time.LocalDateTime;

@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AssetResponseDto {

    private Long id;
    private String title;
    private Integer price;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

    public static AssetResponseDto from(AssetEntity entity) {
        return AssetResponseDto.builder()
                .id(entity.getId())
                .title(entity.getTitle())
                .price(entity.getPrice())
                .createdAt(entity.getCreatedAt())
                .modifiedAt(entity.getModifiedAt())
                .build();
    }
}
