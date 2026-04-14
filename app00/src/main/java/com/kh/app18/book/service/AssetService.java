package com.kh.app18.book.service;

import com.kh.app18.book.dto.request.AssetRequestDto;
import com.kh.app18.book.dto.response.AssetResponseDto;
import com.kh.app18.book.entity.AssetEntity;
import com.kh.app18.book.repository.AssetRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class AssetService {

    private final AssetRepository bookRepository;

    @Transactional
    public AssetResponseDto save(AssetRequestDto requestDto) {
        AssetEntity entity = requestDto.toEntity();
        bookRepository.save(entity);
        return AssetResponseDto.from(entity);
    }

    public List<AssetResponseDto> findAll() {
        return bookRepository.findAll()
                .stream().map(AssetResponseDto::from)
                .toList();
    }

    public AssetResponseDto findById(Long id) {
        return AssetResponseDto.from(bookRepository.findById(id));
    }

    @Transactional
    public void deleteById(Long id) {
        AssetEntity entity = bookRepository.findById(id);
        entity.delete();
    }

    @Transactional
    public AssetResponseDto updateTitleAndPriceById(Long id, AssetRequestDto requestDto) {
        AssetEntity entity = bookRepository.findById(id);
        entity.change(requestDto.getTitle() , requestDto.getPrice());
        return AssetResponseDto.from(entity);
    }
}//class
